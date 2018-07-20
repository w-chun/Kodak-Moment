import React from 'react';
import { Link } from 'react-router-dom';
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
    this.removePhoto = this.removePhoto.bind(this);
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

  removePhoto(e) {
    e.preventDefault();
    this.props.deletePost(this.props.postId);
  }

  render() {
    let age;
    let likes;
    let caption;
    let removeButton;
    const { post, comments, currentUser, deleteComment } = this.props;
    if (this.props.post.age) {
      age = <div className='post-age'>{post.age} ago</div>;
    }
    if (post.likes === 1) {
      likes = <div className='likes-counter'>{post.likes} like</div>;
    } else if (post.likes > 0) {
      likes = <div className='likes-counter'>{post.likes} likes</div>;
    }
    if (post.caption) {
      caption = <div className='post-show-caption'>
                  <b>{post.user.username}</b> {post.caption}
                </div>;
    }
    if (post.author_id === currentUser.id) {
      removeButton = <i className="far fa-trash-alt" onClick={this.removePhoto}></i>;
    }
    return (
      <div className='profile-post-show-container'>
        <div className='post-show-image'><img src={post.img_url}></img></div>
        <div className='profile-post-show'>
          <div>
            <div className='post-show-user'>
              <Link to={`/users/${post.author_id}`} className='post-profile-link'>
                <img src={post.user.img_url} className='post-show-user-image'></img></Link>
              <Link to={`/users/${post.author_id}`} className='post-profile-link'>
                {post.user.username}</Link>
            </div>
            <div className='post-caption-comments'>
              {caption}
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
          </div>
          <div className='post-likes-comments'>
            <div className='post-like-wrapper'>
              <div className='likes-container-wrapper'>
                <LikesContainer
                  post={post}
                  post_id={post.id} />
                <label htmlFor="comment" className='comment-button'><i className="far fa-comment"></i></label>
              </div>
              {removeButton}
            </div>
            {likes}
            <div className='post-age-wrapper'>{age}</div>
            <form onSubmit={this.handleComment} className='post-comment-form'>
              <input type='text' id='comment'
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
