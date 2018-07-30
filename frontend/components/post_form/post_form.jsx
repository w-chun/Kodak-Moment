import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

export default class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      img_url: '',
      caption: '',
      modalIsOpen: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.logout = this.logout.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen:true});
  }

  closeModal() {
    this.setState({modalIsOpen:false});
  }

  handleSubmit(e){
    e.preventDefault();
    const post = Object.assign({}, this.state);
    this.props.createPost(post).then(this.props.history.push('/'));
    this.closeModal();
    this.setState({img_url: '', caption: ''});
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  uploadPhoto(e){
    e.preventDefault();

    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function (err, results){
        if (!err) {
          let newState = Object.assign({}, this.state, {img_url: results[0].url});
          this.setState(newState);
        }
      }.bind(this));
  }

  logout() {
    return(e) => {
      e.preventDefault();
      this.props.logout();
    };
  }

  render() {
    return (
      <div className='post-form-container'>
        <button onClick={this.openModal} className='upload-button'><i className="fas fa-upload"></i>Upload</button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className='post-form-modal'
          overlayClassName='post-form-overlay'
          >
          <div className='modal-close'><i className="fas fa-times" onClick={this.closeModal}></i></div>

          <div className='post-form-wrapper'>
          <form onSubmit={this.handleSubmit} className='post-form'>
            <img src={this.state.img_url} className='img-preview'></img>
            <button
              onClick={this.uploadPhoto} className='file-button'>Choose File</button>
            <textarea
              value={this.state.caption}
              onChange={this.update('caption')}
              placeholder='Caption'
              className='caption' />
            <input type='submit' value='Share' className='share-button' />
          </form>
          </div>
        </Modal>
      </div>
  );
  }
}
