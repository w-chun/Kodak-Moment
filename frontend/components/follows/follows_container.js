import { connect } from 'react-redux';
import { createFollow, deleteFollow } from '../../actions/user_actions';
import Follows from './follows';

const mapStateToProps = (state) => ({
  user: state.entities.users,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createFollow: (userId, currentUser) => dispatch(createFollow(userId, currentUser)),
  deleteFollow: (userId, currentUser) => dispatch(deleteFollow(userId, currentUser)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Follows);
