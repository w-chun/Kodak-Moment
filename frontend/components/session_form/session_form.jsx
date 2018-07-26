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
    this.renderErrors = this.renderErrors.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  componentWillUnmount () {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.path !== nextProps.match.path) {
      this.setState({username: "", password: ""});
      this.props.clearErrors();
    }
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

  handleErrors() {
    return (e) => {
      e.preventDefault();
      this.props.clearErrors();
    };
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <div className='session-errors'>
          <ul className='errors-list'>
            {this.props.errors.map((error,i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  handleDemo() {
    return (e) => {
      e.preventDefault();
      this.setState({username: "", password: ""});
      const username = 'user1'.split('');
      const password = 'password'.split('');
      const demoInterval = setInterval(() => {
        if (username.length > 0) {
          this.setState({
            username: this.state.username + username.shift()
          }) ;
        } else if (password.length > 0) {
          this.setState({
            password: this.state.password + password.shift()
          });
        } else {
          const user = Object.assign({}, this.state);
          clearInterval(demoInterval);
          this.props.processForm(user, 'login');
        }
      }, 100);
    };
  }

  loginDemo(){
    return(e) => {
      e.preventDefault();
      const user = {username: "user1", password: "password"};
      this.props.processForm(user, 'login');
    };
  }

  render() {
    let button;
    let emailForm;
    let message;
    let navLogin;
    let navSignup;
    let demoSignup;
    let demologin;
    if (this.props.formType === 'signup') {
      button = 'Sign Up';
      emailForm = (
        <input type='text'
          value={this.state.email}
          onChange={this.update('email')}
          placeholder='Email'
          required='true' />
      );
      message = <p className='message'>Sign up to see Kodaks from your friends</p>;
      navLogin = (<p>Have an account? <Link to='login' className='nav-login-link'>Log In</Link></p>);
      demoSignup = <div className='demo-login-wrapper'>
                    <div className='session-or'>
                      <span className='or'>or</span>
                    </div>
                    <button className="demo-signup" onClick={this.loginDemo()} type="button">Login with Demo</button>
                  </div>;
    } else {
      button = 'Log In';
      navSignup = (<p>Don't have an account? <Link to='signup' className='nav-signup-link'>Sign Up</Link></p>);
      demologin = <div className='demo-login-wrapper'>
                    <div className='session-or'>
                      <span className='or'>or</span>
                    </div>
                    <button className="demo-login" onClick={this.handleDemo()} type="submit">Login with Demo</button>
                  </div>;
    }

    return (
      <div className='session-form-container'>
        <form onSubmit={this.handleSubmit} className='session-form-wrapper'>
          <div className='session-form'>
          <h1 className='home-header'>Kodak Moment</h1>
          {message}
          {demoSignup}
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
          <input type='submit' value={button} className='submit-button'/>
          {this.renderErrors()}
          {demologin}
          </div>
          <div className='nav-login'>{navLogin}</div>
          <div className='nav-signup'>{navSignup}</div>
        </form>
      </div>
    );
  }
}
