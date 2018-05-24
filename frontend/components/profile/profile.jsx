import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import ProfilePostIndexContainer from '../profile_post_index/profile_post_index_container';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchUserPosts(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
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
    if (this.props.user.followed) {
      followButton = <button onClick={this.handleFollow}>Following</button>;
    } else if (this.props.user.id == this.props.currentUser.id) {
      followButton = <button>Edit Profile</button>;
    } else {
      followButton = <button onClick={this.handleFollow}>Follow</button>;
    }
    const { user } = this.props;
    return (
      <div className='profile-container-wrapper'>
        <GreetingContainer />
        <img src={user.img_url} className='user-profile-pic'></img>
        <div>{user.username}</div>
        {followButton}
        <div>Posts: {this.props.postsCount}</div>
        <div>Followers: {this.props.followersCount}</div>
        <div>Following: {this.props.followeesCount}</div>
        <ProfilePostIndexContainer />
      </div>
    );
  }
}
