import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts_actions';
import Discover from './discover';

const mapStateToProps = (state) => ({
  posts: Object.values(state.entities.posts)
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
