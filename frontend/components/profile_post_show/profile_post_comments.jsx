import React from 'react';

export default class ProiflePostComments extends React.Component {
  constructor(props){
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
  }

  deleteComment(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    let deleteButton;
    const { comment, currentUser } = this.props;
    if (currentUser.id === comment.author_id) {
      deleteButton = <div className='delete-button'><i className="fas fa-times" onClick={this.deleteComment}></i></div>;
    }
    return (
      <ul>
        <li className='comment-index-item'>
          <div className='comment'>
            <div><b>{comment.commenter}</b> {comment.body}</div>
            {deleteButton}
          </div>
        </li>
      </ul>
    );
  }
}
