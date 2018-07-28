import React from 'react';
import PostIndexItem from './post_index_item';
import { Link } from 'react-router-dom';

export default class PostIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPosts();
    this.props.fetchAllComments();
    this.props.fetchUser(this.props.currentUser.id);
  }

  render() {
    let index;
    const { user } = this.props;
    if (this.props.user && this.props.posts.filter(post => this.props.followeesIds.includes(post.author_id)).length !== 0) {
      index = <ul className='post-index-container'>
                {this.props.posts.sort(function (a,b) {
                  return (b.id - a.id);
                })
                .filter(post => this.props.followeesIds.includes(post.author_id))
                .map(post => (
                  <PostIndexItem
                    key={post.id}
                    post={post}
                    comments={post.comments} />
                ))
                }
              </ul>;
    } else if (user) {
      index = <div className='find-people'>
                <div className='find-people-post'>
                  <div className='post-user'>
                    <img className='post-user-image' src={user.img_url}/>
                    <Link to={`/users/${user.id}`} className='post-profile-link'>
                      {user.username}
                    </Link>
                  </div>
                  <div className='no-followers'>
                    Oops you're not following anyone right now. <br />
                    <Link to='/discover' className='explore-link'>Explore for people and Kodaks here</Link>
                  </div>
                  <div className='fake-likes-comments'>
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                  </div>
                  <div className='fake-post-caption'>
                    <Link to={`/users/${user.id}`} className='caption-username'><b>{user.username}</b></Link> Go Follow some people!
                  </div>
                </div>
              </div>;
    }
    return (
      <div>
        {index}
      </div>
    );
  }
}
