import React from 'react';

export default class CommentsIndexItem extends React.Component {
  render() {
    const { comment } = this.props;
    return (
      <li>
        <div>
          <div>{comment.body}</div>
        </div>
      </li>
    );
  }
}
