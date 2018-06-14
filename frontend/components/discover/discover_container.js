import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts_actions';
import { fetchUsers, createFollow, deleteFollow } from '../../actions/user_actions';
import Discover from './discover';

const mapStateToProps = (state) => {
  let usersObject = state.entities.users;
  if (state.entities.users.users) {
    usersObject = state.entities.users.users;
  }
  return {
    posts: Object.values(state.entities.posts),
    users: Object.values(usersObject),
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
