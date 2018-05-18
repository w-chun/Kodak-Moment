import React from 'react';

export default class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike(e) {
    e.preventDefault();
    if (this.props.post.liked) {
      this.props.deleteLike(this.props.postId);
    } else {
      this.props.createLike(this.props.postId);
    }
  }

  render() {
    if (this.props.post.liked) {
      return (
        <i className="fas fa-heart liked" onClick={this.handleLike}></i>
      );
    } else {
      return (
        <i className="far fa-heart" onClick={this.handleLike}></i>
      );
    }
  }
}
