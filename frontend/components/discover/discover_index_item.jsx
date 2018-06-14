import React from 'react';

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
            <div className='discover-img-wrapper'><img src={`${user.img_url}`} className='discover-img'></img></div>
            <div className='discover-username'>{user.username}</div>
            {followButton}
          </div>
        </li>
      </div>
    );
  }
}
