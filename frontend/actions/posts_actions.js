import * as APIPostsUtil from '../util/posts_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const removePosts = postId => ({
  type: REMOVE_POST,
  postId
});

export const fetchPosts = () => dispatch => (
  APIPostsUtil.fetchPosts()
    .then(posts => dispatch(receivePosts(posts)))
);

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
    .then(() => dispatch(postId))
);

export const createLike = (postId) => dispatch => (
  APIPostsUtil.createLike(postId)
    .then(post => dispatch(receivePost))
);

export const deleteLike = (postId) => dispatch => (
  APIPostsUtil.deleteLike(postId)
    .then(post => dispatch(receivePost))
);
