import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import ExploreIndexItem from './explore_index_item';
import DiscoverIndexItem from './discover_index_item';
import Loading from '../loading';

export default class Discover extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    this.props.fetchPosts();
    this.props.fetchUsers();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.users.length !== newProps.users.length) {
      this.props.fetchUsers();
    }
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
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
                  return Math.floor(Math.random(b.id - a.id) * 10);
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
}
