import React from 'react';
import { Link } from 'react-router-dom';

export default class FolloweesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow(e) {
    e.preventDefault();
    if (this.props.followee.followed) {
      this.props.deleteFollow(this.props.followee.followee_id, this.props.currentUser.id);
    } else {
      this.props.createFollow(this.props.followee.followee_id, this.props.currentUser.id);
    }
  }

  render () {
    let followButton;
    const { followee } = this.props;
    if (this.props.followee.followed && this.props.currentUser.id === this.props.followee.followee_id) {
      followButton = <div></div>;
    } else if (!this.props.followee.followed && this.props.currentUser.id === this.props.followee.followee_id) {
      followButton = <div></div>;
    } else if (this.props.followee.followed) {
      followButton = <button onClick={this.handleFollow} className='followees-following-button'>Following</button>;
    } else if (!this.props.followee.followed) {
      followButton = <button onClick={this.handleFollow} className='followees-follow-button'>Follow</button>;
    }
    return (
      <li className='follows-index-item'>
        <div className='follows-info'>
          <div className='follows-user'>
            <Link to={`/users/${followee.followee_id}`} className='follows-nav-link'>
              <img src={`${followee.profile_pic}`} className='follows-pic'></img>
            </Link>
            <Link to={`/users/${followee.followee_id}`} className='follows-nav-link'>
              <div className='follows-username'>{ followee.username }</div>
            </Link>
          </div>
          <div className='follows-button'>{followButton}</div>
        </div>
      </li>
    );
  }
}
