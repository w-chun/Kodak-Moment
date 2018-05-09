import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav>
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <header>
    <div><Link to='/upload'>Upload</Link></div>
    <div>
      <div><img src={currentUser.img_url}></img>Welcome {currentUser.username}!</div>
    </div>
    <div><button onClick={logout}>Log Out</button></div>
  </header>
);

const Greeting = ({ currentUser, logout }) => {
  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};

export default Greeting;
