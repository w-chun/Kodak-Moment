import React from 'react';

export default class FolloweesIndexItem extends React.Component {
  render () {
    const { followee } = this.props;
    return (
      <li className='follows-index-item'>
        <div className='follows-info'>
          <img src={`${followee.profile_pic}`} className='follows-pic'></img>
          <div className='follows-username'>{ followee.username }</div>
        </div>
      </li>
    );
  }
}
