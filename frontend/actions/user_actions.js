import * as APIUserUtil from '../util/users_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS';
export const RECEIVE_FOLLOWEES = 'RECEIVE_FOLLOWEES';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveFollowers = followers => ({
  type: RECEIVE_FOLLOWERS,
  followers
});

export const receiveFollowees = followees => ({
  type: RECEIVE_FOLLOWEES,
  followees
});

export const fetchUser = (userId) => dispatch => (
  APIUserUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
);

export const fetchFollowers = (userId) => dispatch => (
  APIUserUtil.fetchFollowers(userId)
    .then(followers => dispatch(receiveFollowers(followers)))
);

export const fetchFollowees = (userId) => dispatch => (
  APIUserUtil.fetchFollowees(userId)
    .then(followees => dispatch(receiveFollowees(followees)))
);

export const createFollow = (userId, followerId) => dispatch => (
  APIUserUtil.createFollow(userId, followerId)
    .then(user => dispatch(receiveUser(user)))
);

export const deleteFollow = (userId, followerId) => dispatch => (
  APIUserUtil.deleteFollow(userId, followerId)
    .then(user => dispatch(receiveUser(user)))
);
