import * as APIPostsUtil from '../util/posts_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const START_LOADING_POSTS = 'START_LOADING_POSTS';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

export const startLoadingPosts = () => ({
  type: START_LOADING_POSTS,
});

export const fetchPosts = () => dispatch => {
  dispatch(startLoadingPosts());
  APIPostsUtil.fetchPosts()
    .then(posts => dispatch(receivePosts(posts)));
};

export const fetchPost = () => dispatch => (
  APIPostsUtil.fetchPost()
    .then(post => dispatch(receivePost(post)))
);

export const createPost = (formPost) => dispatch => (
  APIPostsUtil.createPost(formPost)
    .then(post => dispatch(receivePost(post)))
);

export const deletePost = (postId) => dispatch => (
  APIPostsUtil.deletePost(postId)
    .then(() => dispatch(removePost(postId)))
);

export const createLike = (postId) => dispatch => (
  APIPostsUtil.createLike(postId)
    .then(post => dispatch(receivePost(post)))
);

export const deleteLike = (postId) => dispatch => (
  APIPostsUtil.deleteLike(postId)
    .then(post => dispatch(receivePost(post)))
);

export const fetchUserPosts = (userId) => dispatch => (
  APIPostsUtil.fetchUserPosts(userId)
    .then(posts => dispatch(receivePosts(posts)))
);
