import { connect } from 'react-redux';
import { createFollow, deleteFollow } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selectors';
import Follows from './follows';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.user.id;
  const user = selectUser(state.entities, userId);
  return {
  user: user,
  users: state.entities.users,
  currentUser: state.session.currentUser
};
};

const mapDispatchToProps = (dispatch) => ({
  createFollow: (userId, currentUser) => dispatch(createFollow(userId, currentUser)),
  deleteFollow: (userId, currentUser) => dispatch(deleteFollow(userId, currentUser)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Follows);
