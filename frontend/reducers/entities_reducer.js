import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import commentsReducer from './comments_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  users: usersReducer
});

export default entitiesReducer;
