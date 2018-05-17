import { connect } from 'react-redux';
import { fetchAllComments, fetchPostComments,
  createComment, deleteComment } from '../../actions/comments_actions';
import { selectComments } from '../../reducers/selectors';
import Comments from './comments';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
  postId: ownProps.post.id,
  postComments: selectComments(state, ownProps.post.id)
};
};

const mapDispatchToProps = dispatch => ({
  fetchPostComments: (postId) => dispatch(fetchPostComments(postId)),
  createComment: (postId, comment) => dispatch(createComment(postId, comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
