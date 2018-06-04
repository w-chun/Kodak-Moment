import React from 'react';
import FollowersIndexItem from './followers_index_item';
import FolloweesIndexItem from './followees_index_item';

export default class Follows extends React.Component {
  followers() {
    return (
      <div>
        <div>Followers</div>
        <ul>
          { this.props.user.followers.map(follower => (
            <FollowersIndexItem
              key={follower.follower_id}
              follower={follower}
              followType='followers' />
            ))
          }
        </ul>
      </div>
    );
  }

  followees() {
    return (
      <div>
        <div>Followees</div>
        <ul>
          { this.props.user.followees.map(followee => (
            <FolloweesIndexItem
              key={followee.followee_id}
              followee={followee}
              followType='followees' />
            ))
          }
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
