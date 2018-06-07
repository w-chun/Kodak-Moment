import React from 'react';
import { Link } from 'react-router-dom';
import PostFormContainer from '../post_form/post_form_container';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.props.logout.bind(this);
  }

  logout() {
    return (e) => {
      e.preventDefault();
      this.props.logout();
    };
  }

  render() {
    return (
      <div className='greeting-container-wrapper'>
      <header className='header'>
        <div className='header-home-link'><Link to='/'><i className="fas fa-camera-retro"></i><div className='header-title'>Kodak Moment</div></Link></div>
        <PostFormContainer />
        <div className='nav-links'>
          <div><i className="far fa-compass"></i></div>
          <Link to={`/users/${this.props.currentUser.id}`} className='nav-profile-link'><div><i className="far fa-user"></i></div></Link>
          <div><i className="fas fa-sign-out-alt" onClick={this.props.logout}></i></div>
        </div>
      </header>
      </div>
    );
  }
}
