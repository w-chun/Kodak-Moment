import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import ExploreIndexItem from './explore_index_item';
import DiscoverIndexItem from './discover_index_item';

export default class Discover extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params !== nextProps.match.params) {
      this.props.fetchUsers();
    }
  }

  render() {
    return (
      <div className='discover-container-wrapper'>
        <GreetingContainer />
        <div className='discover-container'>
          <div>
            <h1 className='discover-titles'>Discover People</h1>
            <ul className='discover-grid'>
              {this.props.users.sort(function(a,b) {
                return Math.floor(Math.random(b.id - a.id) * 10);
              })
                .filter(user => user.followed === false)
                .map(user => (
                <DiscoverIndexItem
                  key={user.id}
                  user={user}
                  currentUser={this.props.currentUser}
                  createFollow={this.props.createFollow}
                  deleteFollow={this.props.deleteFollow} />
              ))
                .slice(0,3)
              }
            </ul>
          </div>
          <div className='explore-container'>
            <h1 className='discover-titles'>Explore</h1>
            <ul className='explore-grid'>
              {this.props.posts.sort(function(a,b) {
                return Math.random(b.id - a.id);
              })
              .map(post => (
                <ExploreIndexItem
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
