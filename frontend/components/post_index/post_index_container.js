import { connect } from 'react-redux';
import { fetchPosts, fetchPost } from '../../actions/posts_actions';
import { fetchAllComments } from '../../actions/comments_actions';
import { fetchUser } from '../../actions/user_actions';
import { selectUser } from '../../reducers/selectors';
import PostIndex from './post_index';

const mapStateToProps = (state) => {
  const currentUser = state.session.currentUser;
  const user = selectUser(state.entities, currentUser.id);
  const followeesIds = [currentUser.id];
  if (user) {
    user.followees.forEach(follows => followeesIds.push(follows.followee_id));
  }
    return {
  posts: Object.values(state.entities.posts),
  currentUser: currentUser,
  user: user,
  followeesIds: followeesIds,
  loading: state.loading.loading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchAllComments: () => dispatch(fetchAllComments()),
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
