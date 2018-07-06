import React from 'react';
import Modal from 'react-modal';

export default class ProfileUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      username: "",
      img_url: ""
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { user } = this.props;
    this.setState({ username: user.username, img_url: user.img_url });
  }

  openModal() {
    this.setState({modalIsOpen:true});
  }

  closeModal() {
    this.setState({modalIsOpen:false});
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

  update(field){
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, user, { username: this.state.username, img_url: this.state.img_url, id: this.props.user.id});
    this.props.updateUser(user);
    this.closeModal();
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal} className='follow-button'>Edit Profile</button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className='profile-update-modal'
          overlayClassName='profile-update-overlay'
          >
          <div className='modal-close'><i className="fas fa-times" onClick={this.closeModal}></i></div>

          <div className='profile-update-wrapper'>
          <h2 className='edit-profile-title'>Edit Profile</h2>
          <form onSubmit={this.handleSubmit} className='profile-update-form'>
            <div className='profile-preview'>
              <div className='profile-photo-preview'><img src={this.state.img_url} className='profile-img-preview'></img>
                <button
                  onClick={this.uploadPhoto} className='profile-update-button'>Edit Profile Photo</button>
              </div>
              <div className='profile-username-edit'><span className='username-label'>Username</span><input type='text' value={this.state.username} onChange={this.update("username")} /></div>
            </div>
            <input type='submit' value='Update' className='share-button' />
          </form>
          </div>
        </Modal>
      </div>
    );
  }
}
