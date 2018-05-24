import { connect } from 'react-redux';
import { fetchUserPosts } from '../../actions/posts_actions';
import ProfilePostIndex from './profile_post_index';

const mapStateToProps = (state) => ({
  posts: Object.values(state.entities.posts)
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePostIndex);
