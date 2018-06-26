import { connect } from 'react-redux';
import { fetchUser, fetchFollowers, fetchFollowees, createFollow, deleteFollow } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selectors';
import { fetchUserPosts } from '../../actions/posts_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = selectUser(state.entities, userId);
  return {
  user: user,
  followed: state.entities.users.followed,
  currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchFollowers: (userId) => dispatch(fetchFollowers(userId)),
  fetchFollowees: (userId) => dispatch(fetchFollowees(userId)),
  createFollow: (userId, currentUser) => dispatch(createFollow(userId, currentUser)),
  deleteFollow: (userId, currentUser) => dispatch(deleteFollow(userId, currentUser)),
  fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
