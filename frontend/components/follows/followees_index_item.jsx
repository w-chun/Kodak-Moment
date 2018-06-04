import React from 'react';

export default class FolloweesIndexItem extends React.Component {
  render () {
    const { followee } = this.props;
    return (
      <li>
        <div>
          <img src={`${followee.profile_pic}`}></img>
          { followee.username }
        </div>
      </li>
    );
  }
}
