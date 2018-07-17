import React from 'react';
import PostIndexItem from './post_index_item';

export default class PostIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPosts();
    this.props.fetchAllComments();
  }

  render() {
    return (
      <div>
        <ul className='post-index-container'>
          {this.props.posts.sort(function (a,b) {
            return (b.id - a.id);
          })
          .map(post => (
            <PostIndexItem
              key={post.id}
              post={post}
              comments={post.comments} />
          ))
          }
        </ul>
      </div>
    );
  }
}
