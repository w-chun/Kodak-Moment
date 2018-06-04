import React from 'react';

export default class FollowersIndexItem extends React.Component {
  render () {
    const { follower } = this.props;
    return (
      <li>
        <div>
          <img src={`${follower.profile_pic}`}></img>
          { follower.username }
        </div>
      </li>
    );
  }
}
