import { connect } from 'react-redux';
import { createPost } from '../../actions/posts_actions';
import { logout } from '../../actions/session_actions';
import PostForm from './post_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, {history}) => ({
  createPost: (post) => dispatch(createPost(post))
    .then(() => history.push('/posts')),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
