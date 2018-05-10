import React from 'react';
import { Link } from 'react-router-dom';

export default class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      img_url: '',
      caption: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const post = Object.assign({}, this.state);
    this.props.createPost(post);
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
      <div>
        <div className='post-form-wrapper'>
        <form onSubmit={this.handleSubmit} className='post-form'>
          <img src={this.state.img_url} className='img-preview'></img>
          <input type='file'
            onClick={this.uploadPhoto} className='file-button'></input>
          <textarea
            value={this.state.caption}
            onChange={this.update('caption')}
            placeholder='Caption'
            className='caption' />
          <input type='submit' value='Share' className='share-button' />
        </form>
        </div>
      </div>
  );
  }
}
