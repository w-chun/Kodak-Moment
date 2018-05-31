import React from 'react';
import CommentsIndexItem from './comments_index_item';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: this.props.currentUser.username,
      body: ''
    };
    this.handleComment = this.handleComment.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleComment(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    this.props.createComment(this.props.postId, comment)
      .then(this.setState({body: ''}));
  }

  render() {
    let age;
    const { currentUser, deleteComment, post } = this.props;
    const comments = this.props.postComments.map(comment => (
      <CommentsIndexItem
          key={comment.id}
          comment={comment}
          currentUser={currentUser}
          deleteComment={deleteComment} />
      ));
    if (this.props.post.age) {
      age = <div className='post-age'>{post.age} ago</div>;
    }
    return (
      <div className='comment-index-item-container'>
        {comments}
        {age}
        <form onSubmit={this.handleComment} className='comment-form'>
          <input type='text' id='comment'
            value={this.state.body}
            onChange={this.update('body')}
            placeholder='Add a comment...'
            className='comment-input' />
          <input type='submit' value='Post' className='post-button' />
        </form>
      </div>
    );
  }
}
