import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav>
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <header className='header'>
    <div className='header-home-link'><Link to='/posts'><i className="fas fa-camera-retro"></i><div className='header-title'>Kodak Moment</div></Link></div>
    <div className='upload-link'><Link to='/upload'><i className="fas fa-upload"></i>Upload</Link></div>
    <div className='nav-links'>
      <div><i className="far fa-compass"></i></div>
      <div><i className="far fa-user"></i></div>
      <div><i className="fas fa-sign-out-alt" onClick={logout}></i></div>
    </div>
  </header>
);

const Greeting = ({ currentUser, logout }) => {
  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};

export default Greeting;
