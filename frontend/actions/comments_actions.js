import * as APICommentsUtil from '../util/comments_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_POST_COMMENTS = 'RECEIVE_POST_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


export const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const receivePostComments = (comments) => ({
  type: RECEIVE_POST_COMMENTS,
  comments
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
});

export const fetchAllComments = () => dispatch => (
  APICommentsUtil.fetchAllComments()
    .then(comments => dispatch(receiveAllComments(comments)))
);

export const fetchPostComments = (postId) => dispatch => (
  APICommentsUtil.fetchPostComments(postId)
    .then(comments => dispatch(receivePostComments(comments)))
);

export const createComment = (postId, formComment) => dispatch => (
  APICommentsUtil.createComment(postId, formComment)
    .then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = (commentId) => dispatch => (
  APICommentsUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)))
);
