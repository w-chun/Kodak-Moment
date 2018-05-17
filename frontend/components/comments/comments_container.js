import { connect } from 'react-redux';
import { createComment, deleteComment } from '../../actions/comments_actions';
import { selectComments } from '../../reducers/selectors';
import Comments from './comments';

const mapStateToProps = (state, ownProps) => ({
  postId: ownProps.post.id,
  postComments: selectComments(state, ownProps.post.id),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createComment: (postId, comment) => dispatch(createComment(postId, comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
