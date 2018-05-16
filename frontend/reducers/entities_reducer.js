import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer
});

export default entitiesReducer;
