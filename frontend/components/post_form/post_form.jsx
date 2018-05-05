import React from 'react';

export default class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      img_url: '',
      caption: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input text='text'
            value={this.state.img_url}
            onChange={this.update('img_url')}
            placeholder='img_url' />
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
