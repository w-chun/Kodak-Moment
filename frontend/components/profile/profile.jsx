import React from 'react';
import Modal from 'react-modal';
import GreetingContainer from '../greeting/greeting_container';
import ProfilePostIndexContainer from '../profile_post_index/profile_post_index_container';
import FollowsContainer from '../follows/follows_container';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followersIsOpen: false,
      followeesIsOpen: false
    };
    this.openFollowersModal = this.openFollowersModal.bind(this);
    this.closeFollowersModal = this.closeFollowersModal.bind(this);
    this.openFolloweesModal = this.openFolloweesModal.bind(this);
    this.closeFolloweesModal = this.closeFolloweesModal.bind(this);
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
    this.setState({followersIsOpen:false});
    this.setState({followeesIsOpen:false});
  }

  openFollowersModal() {
    this.setState({followersIsOpen:true});
  }

  closeFollowersModal() {
    this.setState({followersIsOpen:false});
  }

  openFolloweesModal() {
    this.setState({followeesIsOpen:true});
  }

  closeFolloweesModal() {
    this.setState({followeesIsOpen:false});
  }

  handleFollow(e) {
    e.preventDefault();
    if (this.props.user.followed) {
      this.props.deleteFollow(this.props.user.id, this.props.currentUser.id);
    } else {
      this.props.createFollow(this.props.user.id, this.props.currentUser.id);
    }
  }

  userProfile() {
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
      <div className='profile-details'>
        <div className='profile-username'>{user.username}
          <div className='follow-button-wrapper'>{followButton}</div>
        </div>
        <div className='profile-stats'>
          <div className='posts-count'><b>{user.posts_count}</b> posts</div>
          <div className='followers-count' onClick={this.openFollowersModal}><b>{user.followers_count}</b> followers</div>
          <div className='followees-count' onClick={this.openFolloweesModal}><b>{user.followees_count}</b> following</div>
        </div>
      </div>
    );
  }

  render() {
    let followButton;
    let profilePic;
    let profile;
    const { user } = this.props;
    if (user) {
      profilePic = <div className='user-profile-pic'><img src={user.img_url}></img></div>;
      profile = this.userProfile();
    }
    return (
      <div className='profile-container-wrapper'>
        <GreetingContainer />
        <div className='profile-container'>
          <div className='profile-info'>
            <div className='user-profile-pic-wrapper'>
              {profilePic}
            </div>
            {profile}
          </div>
          <ProfilePostIndexContainer />
        </div>
        <Modal
          isOpen={this.state.followersIsOpen}
          onRequestClose={this.closeFollowersModal}
          className='followers-modal'
          overlayClassName='followers-overlay'
          shouldCloseOnOverlayClick={true}
          >
          <div>
            <div className='follows-modal-close'><i className="fas fa-times" onClick={this.closeFollowersModal}></i></div>
            <FollowsContainer followType='followers' user={user} />
          </div>
        </Modal>
        <Modal
          isOpen={this.state.followeesIsOpen}
          onRequestClose={this.closeFolloweesModal}
          className='followers-modal'
          overlayClassName='followers-overlay'
          >
          <div>
            <div className='follows-modal-close'><i className="fas fa-times" onClick={this.closeFolloweesModal}></i></div>
            <FollowsContainer followType='followees' user={user}/>
          </div>
        </Modal>
      </div>
    );
  }
}
