import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts_actions';
import { fetchUsers } from '../../actions/user_actions';
import Discover from './discover';

const mapStateToProps = (state) => {
  let usersObject = state.entities.users;
  if (state.entities.users.users) {
    usersObject = state.entities.users.users;
  }
  return {
    posts: Object.values(state.entities.posts),
    users: Object.values(usersObject)
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
