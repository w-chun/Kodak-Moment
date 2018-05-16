import { RECEIVE_ALL_COMMENTS, RECEIVE_POST_COMMENTS,
  RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comments_actions';
import { merge } from 'lodash';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return action.comments;
    case RECEIVE_POST_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      return merge({}, state, action.comment);
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
