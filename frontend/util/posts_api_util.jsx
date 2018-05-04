export const fetchPosts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/posts'
  })
);

export const fetchPost = (postId) => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`
  })
);

export const createPost = (post) => (
  $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: {post}
  })
);

export const deletePost = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/posts/${id}`
  })
);
