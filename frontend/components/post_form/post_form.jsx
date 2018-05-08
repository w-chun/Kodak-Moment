import React from 'react';

export default class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      img_url: '',
      caption: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <img src={this.state.img_url} className='img-preview'></img>
          <button
            onClick={this.uploadPhoto}>Choose File</button>
          <input type='text'
            value={this.state.caption}
            onChange={this.update('caption')}
            placeholder='caption' />
          <input type='submit' value='Share' className='submit-button'/>
        </form>
      </div>
  );
  }
}
