export const asArray = ( obj ) => {
  if (!obj) {
    return [];
  } else {
    return Object.keys(obj).map(key => obj[key]);
  }
};

export const selectComments = (state, postId) => {
  const comments = asArray(state.entities.comments);
  const postComments = comments.filter(
    (comment) => comment.post_id === parseInt(postId)
    );
  return postComments;
};

export const selectUser = ({ users }, id) => {
  return users[id];
};
