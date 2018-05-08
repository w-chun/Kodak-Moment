import { connect } from 'react-redux';
import { fetchPosts, fetchPost } from '../../actions/posts_actions';
import PostIndex from './post_index';

const mapStateToProps = state => ({
  posts: Object.values(state.entities.posts)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
