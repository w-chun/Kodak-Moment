import { connect } from 'react-redux';
import { fetchUser, createFollow, deleteFollow } from '../../actions/user_actions';
import Follows from './follows';

const mapStateToProps = (state, ownProps) => {
  return {
  users: state.entities.users,
  currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  createFollow: (userId, currentUser) => dispatch(createFollow(userId, currentUser)),
  deleteFollow: (userId, currentUser) => dispatch(deleteFollow(userId, currentUser)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Follows);
