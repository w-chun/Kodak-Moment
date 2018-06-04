import React from 'react';

export default class FollowersIndexItem extends React.Component {
  render () {
    const { follower } = this.props;
    return (
      <li className='follows-index-item'>
        <div className='follows-info'>
          <img src={`${follower.profile_pic}`} className='follows-pic'></img>
          <div className='follows-username'>{ follower.username }</div>
        </div>
      </li>
    );
  }
}
