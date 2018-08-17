import { RECEIVE_POSTS, START_LOADING_POSTS } from '../actions/posts_actions';
import { RECEIVE_USER, RECEIVE_USERS, START_LOADING_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';

const loadingReducer = (state = {loading: false}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_POSTS:
        return merge({}, state, {loading: true});
    case START_LOADING_USERS:
        return merge({}, state, {loading: true});
    case RECEIVE_POSTS:
        setTimeout(function() {
          return merge({}, state, {loading: false});
        }, 5000);
    case RECEIVE_USERS:
        setTimeout(function() {
          return merge({}, state, {loading: false});
        }, 5000);
    case RECEIVE_USER:
        return merge({}, state, {loading: false});
    default:
      return state;
  }
};

export default loadingReducer;
