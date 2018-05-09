import React from 'react';
import { Link } from 'react-router-dom';

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
          <div><b>{post.user.username}</b> {post.caption}</div>
        </div>
      </li>
    );
  }
}
