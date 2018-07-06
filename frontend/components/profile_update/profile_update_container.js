import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selectors';
import ProfileUpdate from './profile_update';

export const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.user.id;
  const user = selectUser(state.entities, userId);
  return {
    user: user
  };
};

export const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileUpdate);
