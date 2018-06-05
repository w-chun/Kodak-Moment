import React from 'react';
import { Link } from 'react-router-dom';

export default class FolloweesIndexItem extends React.Component {
  render () {
    const { followee } = this.props;
    return (
      <li className='follows-index-item'>
        <div className='follows-info'>
          <Link to={`/users/${followee.followee_id}`} className='follows-nav-link'>
            <img src={`${followee.profile_pic}`} className='follows-pic'></img>
          </Link>
          <Link to={`/users/${followee.followee_id}`} className='follows-nav-link'>
            <div className='follows-username'>{ followee.username }</div>
          </Link>
        </div>
      </li>
    );
  }
}
