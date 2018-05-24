import React from 'react';

export default class ProfilePostIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { post } = this.props;
    return (
      <div className='profile-post-wrapper'>
        <img src={post.img_url} className='profile-post-index-image'></img>
      </div>
    );
  }
}
