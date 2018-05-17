import React from 'react';

export default class CommentsIndexItem extends React.Component {
  render() {
    const { comment } = this.props;
    return (
      <ul>
        <li>
          <div>
            <div>{comment.commenter}</div>
            <div>{comment.body}</div>
          </div>
        </li>
      </ul>
    );
  }
}
