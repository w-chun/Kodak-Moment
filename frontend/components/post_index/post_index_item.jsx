import React from 'react';
import { Link } from 'react-router-dom';
import LikeContainer from '../likes/likes_container';

export default class PostIndexItem extends React.Component {
  render(){
    const {post} = this.props;
    return (
      <li className='post-index-item'>
        <div>
          <div className='post-user'>
            <img src={post.user.img_url}/> {post.user.username}
          </div>
          <img src={post.img_url} className='post-img'/>
          <LikeContainer
            post={post}
            post_id={post.id} />
          <div>{post.likes} likes</div>
          <div><b>{post.user.username}</b> {post.caption}</div>
        </div>
      </li>
    );
  }
}
