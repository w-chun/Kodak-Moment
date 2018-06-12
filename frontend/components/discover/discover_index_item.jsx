import React from 'react';

export default class DiscoverIndexItem extends React.Component {
  render() {
    const {post} = this.props;
    return (
      <li className='discover-index-item'>
        <img src={post.img_url} className='discover-img'/>
      </li>
    );
  }
}
