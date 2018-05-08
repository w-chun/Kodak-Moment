import React from 'react';

export default class PostIndexItem extends React.Component {
  render(){
    const {post} = this.props;
    return (
      <li>
        <div>
          <img src={post.img_url} />
        </div>
      </li>
    );
  }
}
