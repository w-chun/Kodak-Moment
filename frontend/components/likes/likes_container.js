import { connect } from 'react-redux';
import { createLike, deleteLike } from '../../actions/posts_actions';
import Likes from './likes';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    currentUser: state.session.currentUser,
    postId: ownProps.post.id
  };
};

const mapDispatchToProps = dispatch => ({
  createLike: postId => dispatch(createLike(postId)),
  deleteLike: postId => dispatch(deleteLike(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Likes);
