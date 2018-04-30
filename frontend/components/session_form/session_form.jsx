import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formType === 'login' ?
    {
      username: "",
      password: ""
    } : {
      username: "",
      email: "",
      password: "",
      img_url: "https://res.cloudinary.com/dih798zsl/image/upload/c_scale,w_50/v1511461159/765-default-avatar_zsj3xt.png"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user, this.props.formType);
  }

  render() {
    let button;
    let emailForm;
    let message;
    let navLogin;
    let navSignup;
    if (this.props.formType === 'signup') {
      button = 'Sign Up';
      emailForm = (
        <input type='text'
          value={this.state.email}
          onChange={this.update('email')}
          placeholder='Email'
          required='true' />
      );
      message = 'Sign up to see Kodaks from your friends';
      navLogin = (<p>Have an account? <Link to='login'>Log In</Link></p>);
    } else {
      button = 'Log In';
      navSignup = (<p>Don't have an account? <Link to='signup'>Sign Up</Link></p>);
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='session-form'>
          {message}
          <input type='text'
            value={this.state.username}
            onChange={this.update('username')}
            placeholder='Username'
            required='true' />
          {emailForm}
          <input type='password'
            value={this.state.password}
            onChange={this.update('password')}
            placeholder='Password'
            required='true' />
          <input type='submit' value={button}/>
          </div>
          <div className='nav-login'>{navLogin}</div>
          <div className='nav-signup'>{navSignup}</div>
        </form>
      </div>
    );
  }
}
