import React from 'react';
import CommentsIndexItem from './comments_index_item';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: this.props.currentUser.username,
      body: ''
    };
  }

  componentDidMount(){
    this.props.fetchPostComments(this.props.post_id);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleComment(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    this.props.createComment(this.props.postId, comment);
  }

  render() {
    const comments = this.props.postComments.map(comment => (
      <CommentsIndexItem
          key={comment.id}
          comment={comment} />
      ));
    return (
      <div>
        {comments}
      </div>
    );
  }
}
