import React from 'react';
import ProfilePostIndexItem from './profile_post_index_item';

export default class ProfilePostIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul className='profile-posts-grid'>
        {this.props.posts.sort(function(a,b) {
          return (b.id - a.id);
        })
          .map(post => (
          <ProfilePostIndexItem
            key={post.id}
            post={post} />
        ))}
      </ul>
    );
  }
}
