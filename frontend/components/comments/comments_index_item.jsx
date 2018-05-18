import React from 'react';

export default class CommentsIndexItem extends React.Component {
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
      deleteButton = <i className="fas fa-times" onClick={this.deleteComment}></i>;
    }
    return (
      <ul>
        <li>
          <div>
            <div>{comment.commenter}</div>
            <div>{comment.body}</div>
            {deleteButton}
          </div>
        </li>
      </ul>
    );
  }
}
