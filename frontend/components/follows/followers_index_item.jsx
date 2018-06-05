import React from 'react';
import { Link } from 'react-router-dom';

export default class FollowersIndexItem extends React.Component {
  render () {
    const { follower } = this.props;
    return (
      <li className='follows-index-item'>
        <div className='follows-info'>
          <Link to={`/users/${follower.follower_id}`} className='follows-nav-link'>
            <img src={`${follower.profile_pic}`} className='follows-pic'></img>
          </Link>
          <Link to={`/users/${follower.follower_id}`} className='follows-nav-link'>
            <div className='follows-username'>{ follower.username }</div>
          </Link>
        </div>
      </li>
    );
  }
}
