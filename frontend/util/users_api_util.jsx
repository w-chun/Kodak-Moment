export const fetchUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
);

export const fetchUsers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users'
  })
);

export const updateUser = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: { user }
  })
);

export const fetchFollowers = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/follows/followers`
  })
);

export const fetchFollowees = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/follows/followees`
  })
);

export const createFollow = (userId, followerId) => (
  $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: {followee_id: userId, follower_id: followerId }
  })
);

export const deleteFollow = (userId, followerId) => (
  $.ajax({
    method: 'DELETE',
    url: '/api/follows',
    data: {followee_id: userId, follower_id: followerId }
  })
);
