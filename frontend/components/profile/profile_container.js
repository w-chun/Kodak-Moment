import { connect } from 'react-redux';
import { fetchUser, fetchFollowers, fetchFollowees, createFollow, deleteFollow } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state) => ({
  user: state.entities.users,
  postsCount: state.entities.users.posts_count,
  followersCount: state.entities.users.followers_count,
  followeesCount: state.entities.users.followees_count,
  followed: state.entities.users.followed,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchFollowers: (userId) => dispatch(fetchFollowers(userId)),
  fetchFollowees: (userId) => dispatch(fetchFollowees(userId)),
  createFollow: (userId, currentUser) => dispatch(createFollow(userId, currentUser)),
  deleteFollow: (userId, currentUser) => dispatch(deleteFollow(userId, currentUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
