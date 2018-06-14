import React from 'react';

export default class DiscoverIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {user} = this.props;
    return (
      <div className='discover-index-wrapper'>
        <li className='discover-index-item'>
          <div className='discover-user-info'>
            <div className='discover-img-wrapper'><img src={`${user.img_url}`} className='discover-img'></img></div>
            <div className='discover-username'>{user.username}</div>
          </div>
        </li>
      </div>
    );
  }
}
