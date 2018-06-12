import React from 'react';

export default class DiscoverIndexItem extends React.Component {
  render() {
    const {post} = this.props;
    return (
      <li>
        <img src={post.img_url} className='post-img'/>
      </li>
    );
  }
}
