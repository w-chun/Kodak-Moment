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
      this.props.fetchUserPosts(nextProps.match.params.userId);
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
      followButton = <button onClick={this.handleFollow} className='follow-button'>Following</button>;
    } else if (this.props.user.id == this.props.currentUser.id) {
      followButton = <button className='follow-button'>Edit Profile</button>;
    } else {
      followButton = <button onClick={this.handleFollow} className='follow-button'>Follow</button>;
    }
    const { user } = this.props;
    return (
      <div className='profile-container-wrapper'>
        <GreetingContainer />
        <div className='profile-container'>
          <div className='profile-info'>
            <div className='user-profile-pic-wrapper'>
              <div className='user-profile-pic'><img src={user.img_url}></img></div>
            </div>
            <div className='profile-details'>
              <div className='profile-username'>{user.username}
                <div className='follow-button-wrapper'>{followButton}</div>
              </div>
              <div className='profile-stats'>
                <div className='posts-count'><b>{this.props.postsCount}</b> posts</div>
                <div className='followers-count'><b>{this.props.followersCount}</b> followers</div>
                <div className='followees-count'><b>{this.props.followeesCount}</b> following</div>
              </div>
            </div>
          </div>
          <ProfilePostIndexContainer />
        </div>
      </div>
    );
  }
}
