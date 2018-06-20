import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts_actions';
import { fetchUsers, createFollow, deleteFollow } from '../../actions/user_actions';
import Discover from './discover';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts),
    users: Object.values(state.entities.users),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUsers: () => dispatch(fetchUsers()),
  createFollow: (userId, currentUser) => dispatch(createFollow(userId, currentUser)),
  deleteFollow: (userId, currentUser) => dispatch(deleteFollow(userId, currentUser))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
