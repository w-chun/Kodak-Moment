import { RECEIVE_USER, RECEIVE_USERS, RECEIVE_FOLLOWERS, RECEIVE_FOLLOWEES } from '../actions/user_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, {[action.user.id]: action.user});
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_FOLLOWERS:
      return merge({}, action.followers);
    case RECEIVE_FOLLOWEES:
      return merge({}, action.followees);
    default:
      return state;
  }
};

export default usersReducer;
