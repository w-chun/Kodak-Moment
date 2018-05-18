import React from 'react';
import { Link } from 'react-router-dom';
import LikeContainer from '../likes/likes_container';
import CommentsContainer from '../comments/comments_container';

export default class PostIndexItem extends React.Component {
  render(){
    const { post, comments } = this.props;
    return (
      <li className='post-index-item'>
        <div>
          <div className='post-user'>
            <img className='post-user-image' src={post.user.img_url}/> {post.user.username}
          </div>
          <img src={post.img_url} className='post-img'/>
          <div className='likes-comments-container'>
            <LikeContainer
              post={post}
              post_id={post.id} />
            <div className='likes-counter'>{post.likes} likes</div>
            <div><b>{post.user.username}</b> {post.caption}</div>
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
