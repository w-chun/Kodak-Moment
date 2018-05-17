import { connect } from 'react-redux';
import { fetchPosts, fetchPost } from '../../actions/posts_actions';
import { fetchAllComments } from '../../actions/comments_actions';
import PostIndex from './post_index';

const mapStateToProps = state => ({
  posts: Object.values(state.entities.posts)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchAllComments: () => dispatch(fetchAllComments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
