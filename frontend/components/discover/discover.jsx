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
      <div>
        <GreetingContainer />
        <div>
          Discover People
        </div>
        <div>
          Explore
          <ul>
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
    );
  }
}
