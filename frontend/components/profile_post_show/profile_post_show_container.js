import { connect } from 'react-redux';
import { fetchAllComments, createComment, deleteComment } from '../../actions/comments_actions';
import { selectComments } from '../../reducers/selectors';
import ProfilePostShow from './profile_post_show';

const mapStateToProps = (state, ownProps) => ({
  posts: Object.values(state.entities.posts),
  postComments: selectComments(state, ownProps.post.id),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllComments: () => dispatch(fetchAllComments()),
  createComment: (postId, comment) => dispatch(createComment(postId, comment)),
  deleteComment: (postId) => dispatch(deleteComment(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePostShow);
