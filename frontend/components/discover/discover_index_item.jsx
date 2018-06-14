import React from 'react';

export default class DiscoverIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const {user} = this.props;
    return (
      <div className='discover-index-wrapper'>
        <div><img src={`${user.img_url}`}></img></div>
        <div>{user.username}</div>
      </div>
    );
  }
}
