import React from 'react';
import { Link } from 'react-router-dom';
import LikeContainer from '../likes/likes_container';
import CommentsContainer from '../comments/comments_container';

export default class PostIndexItem extends React.Component {
  render(){
    let likes;
    let caption;
    const { post, comments } = this.props;
    if (post.likes === 1) {
      likes = <div className='likes-counter'>{post.likes} like</div>;
    } else if (post.likes > 0) {
      likes = <div className='likes-counter'>{post.likes} likes</div>;
    }
    if (post.caption) {
      caption = <div className='post-caption'><b>{post.user.username}</b> {post.caption}</div>;
    }
    return (
      <li className='post-index-item'>
        <div>
          <div className='post-user'>
            <img className='post-user-image' src={post.user.img_url}/>
            <Link to={`/users/${post.author_id}`} className='post-profile-link'>
              {post.user.username}
            </Link>
          </div>
          <img src={post.img_url} className='post-img'/>
          <div className='likes-comments-container'>
            <LikeContainer
              post={post}
              post_id={post.id} />
            <label htmlFor="comment" className='comment-button'><i className="far fa-comment"></i></label>
            {likes}
            {caption}
            <CommentsContainer
              post={post}
              comments={comments}
              post_id={post.id} />
          </div>
        </div>
      </li>
    );
  }
}
