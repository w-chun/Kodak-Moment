import React from 'react';
import FollowersIndexItem from './followers_index_item';
import FolloweesIndexItem from './followees_index_item';

export default class Follows extends React.Component {
  followers() {
    let followers;
    if (this.props.user) {
      followers = this.props.user.followers.map(follower => (
        <FollowersIndexItem
          key={follower.follower_id}
          follower={follower}
          followType='followers'
          currentUser={this.props.currentUser}
          createFollow={this.props.createFollow}
          deleteFollow={this.props.deleteFollow} />
      ));
    }
    return (
      <div className='follows-wrapper'>
        <div className='follows-title'>Followers</div>
        <ul className='follows-index-item-wrapper'>
          { followers }
        </ul>
      </div>
    );
  }

  followees() {
    let followees;
    if (this.props.user) {
      followees = this.props.user.followees.map(followee => (
        <FolloweesIndexItem
          key={followee.followee_id}
          followee={followee}
          followType='followees'
          currentUser={this.props.currentUser}
          createFollow={this.props.createFollow}
          deleteFollow={this.props.deleteFollow} />
      ));
    }
    return (
      <div className='follows-wrapper'>
        <div className='follows-title'>Following</div>
        <ul className='follows-index-item-wrapper'>
          { followees }
        </ul>
      </div>
    );
  }

  render() {
    if (this.props.followType === 'followers') {
      return this.followers();
    } else if (this.props.followType === 'followees') {
      return this.followees();
    }
  }
}
