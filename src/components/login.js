import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className="login__title">Log in</div>
        <Link className="button button__login" to="/password">
          <span>Log in</span>
        </Link>
        <div className="login__title">Sign in</div>
        <Link className="button button__login" to="/signin">
          <span>Sign in</span>
        </Link>
      </div>
    );
  }
}
