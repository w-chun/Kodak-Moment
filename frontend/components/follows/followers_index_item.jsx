import React from 'react';
import { Link } from 'react-router-dom';

export default class FollowersIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow(e) {
    e.preventDefault();
    if (this.props.follower.followed) {
      this.props.deleteFollow(this.props.follower.follower_id, this.props.currentUser.id);
    } else {
      this.props.createFollow(this.props.follower.follower_id, this.props.currentUser.id);
    }
  }

  render () {
    let followButton;
    const { follower } = this.props;
    if (this.props.follower.followed && this.props.currentUser.id === this.props.follower.follower_id) {
      followButton = <div></div>;
    } else if (!this.props.follower.followed && this.props.currentUser.id === this.props.follower.follower_id) {
      followButton = <div></div>;
    } else if (this.props.follower.followed) {
      followButton = <button onClick={this.handleFollow} className='followers-following-button'>Following</button>;
    } else if (!this.props.follower.followed){
      followButton = <button onClick={this.handleFollow} className='followers-follow-button'>Follow</button>;
    }
    return (
      <li className='follows-index-item'>
        <div className='follows-info'>
          <div className='follows-user'>
            <Link to={`/users/${follower.follower_id}`} className='follows-nav-link'>
              <img src={`${follower.profile_pic}`} className='follows-pic'></img>
            </Link>
            <Link to={`/users/${follower.follower_id}`} className='follows-nav-link'>
              <div className='follows-username'>{ follower.username }</div>
            </Link>
          </div>
          <div className='follows-button'>{followButton}</div>
        </div>
      </li>
    );
  }
}
