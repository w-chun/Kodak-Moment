import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchPosts, createPost, fetchPost } from './actions/posts_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchPosts = fetchPosts;
  window.fetchPost = fetchPost;
  window.createPost = createPost;

  ReactDOM.render(<Root store={ store }/>, root);
});
