import React from 'react';
import ProfilePostComments from './profile_post_comments';
import LikesContainer from '../likes/likes_container';

export default class ProfilePostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: this.props.currentUser.username,
      body: ''
    };
    this.handleComment = this.handleComment.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllComments();
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
    let likes;
    const { post, comments, currentUser, deleteComment } = this.props;
    if (this.props.post.age) {
      age = <div className='post-age'>{post.age} ago</div>;
    }
    if (post.likes === 1) {
      likes = <div className='likes-counter'>{post.likes} like</div>;
    } else if (post.likes > 0) {
      likes = <div className='likes-counter'>{post.likes} likes</div>;
    }
    return (
      <div className='profile-post-show-container'>
        <div className='post-show-image'><img src={post.img_url}></img></div>
        <div className='profile-post-show'>
          <div>
            <div className='post-show-user'>
              <img src={post.user.img_url} className='post-show-user-image'></img>
              {post.user.username}
            </div>
            <div className='post-show-comments'>
              {this.props.postComments.map(comment => (
                <ProfilePostComments
                  key={comment.id}
                  comment={comment}
                  currentUser={currentUser}
                  deleteComment={deleteComment} />
              ))
              }
            </div>
          </div>
          <div className='post-likes-comments'>
            <div className='post-like-wrapper'>
              <LikesContainer
              post={post}
              post_id={post.id} />
            </div>
            {likes}
            <div className='post-age-wrapper'>{age}</div>
            <form onSubmit={this.handleComment} className='post-comment-form'>
              <input type='text'
                value={this.state.body}
                onChange={this.update('body')}
                placeholder='Add a comment...'
                className='post-comment-input' />
              <input type='submit' value='Post' className='post-button' />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
