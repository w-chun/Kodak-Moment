import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import DiscoverIndexItem from './discover_index_item';

export default class Discover extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className='discover-container-wrapper'>
        <GreetingContainer />
        <div className='discover-container'>
          <div>
            <h1 className='discover-titles'>Discover People</h1>
          </div>
          <div className='explore-container'>
            <h1 className='discover-titles'>Explore</h1>
            <ul className='explore-grid'>
              {this.props.posts.sort(function(a,b) {
                return Math.random(b.id - a.id);
              })
              .map(post => (
                <DiscoverIndexItem
                  key={post.id}
                  post={post} />
              ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
