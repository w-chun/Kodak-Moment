import React from 'react';
import { Link } from 'react-router-dom';
import LikeContainer from '../likes/likes_container';
import CommentsContainer from '../comments/comments_container';

export default class PostIndexItem extends React.Component {
  render(){
    let likes;
    const { post, comments } = this.props;
    if (post.likes === 1) {
      likes = <div className='likes-counter'>{post.likes} like</div>;
    } else if (post.likes > 0) {
      likes = <div className='likes-counter'>{post.likes} likes</div>;
    }
    return (
      <li className='post-index-item'>
        <div>
          <div className='post-user'>
            <img className='post-user-image' src={post.user.img_url}/> <Link to={`/users/${post.author_id}`}>{post.user.username}</Link>
          </div>
          <img src={post.img_url} className='post-img'/>
          <div className='likes-comments-container'>
            <LikeContainer
              post={post}
              post_id={post.id} />
            {likes}
            <div className='post-caption'><b>{post.user.username}</b> {post.caption}</div>
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
