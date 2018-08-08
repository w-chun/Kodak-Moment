import React from 'react';
import { Link } from 'react-router-dom';

export default class DiscoverIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow(e) {
    e.preventDefault();
    if (this.props.user.followed) {
      this.props.deleteFollow(this.props.user.id, this.props.currentUser.id);
    } else {
      this.props.createFollow(this.props.user.id, this.props.currentUser.id);
    }
  }

  render() {
    let followButton;
    const {user} = this.props;
    if (this.props.user.followed) {
      followButton = <button onClick={this.handleFollow} className='discover-follow-button'>Following</button>;
    } else {
      followButton = <button onClick={this.handleFollow} className='discover-follow-button'>Follow</button>;
    }
    return (
      <div className='discover-index-wrapper'>
        <li className='discover-index-item'>
          <div className='discover-user-info'>
            <Link to={`/users/${user.id}`}>
              <div className='discover-img-wrapper'><img src={`${user.img_url}`} className='discover-img'></img></div>
            </Link>
            <Link to={`/users/${user.id}`} className='discover-username'><div>{user.username}</div></Link>
            {followButton}
          </div>
        </li>
      </div>
    );
  }
}
