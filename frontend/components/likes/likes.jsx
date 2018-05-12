import React from 'react';

export default class Likes extends React.Component {
  constructor(props) {
    super(props);
    const liked = this.props.liked;
  }

  handleLike(e) {
    e.preventDefault();
    if (this.props.post.liked) {
      this.props.deleteLike(this.props.postId);
    } else {
      this.props.addLike(this.props.postId);
    }
  }

  render() {
    if (this.props.post.liked) {
      return (
        <i class="far fa-heart" onClick={this.handleLike}></i>
      );
    } else {
      return (
        <i class="fas fa-heart" onClick={this.handleLike}></i>
      );
    }
  }
}
