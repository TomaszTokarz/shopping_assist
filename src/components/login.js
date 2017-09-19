import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = { term: ''};
    this.ui = {
      loginInput : '.js-login-input'
    }
  }

  showPasswordField(event) {
    console.log(event.target);
    console.log(this.ui);
  };

  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="login">
        <input type="email" onChange={event => this.setState({ term: event.target.value })} className="login__input js-login-input" placeholder="Type your e-mail"></input>
        <input type="password" className="login__input inactive"></input>
        <button className="login__button" onClick={this.showPasswordField}>Log in</button>

        <input type="email" className="login__input" placeholder="Type your e-mail"></input>
        <button className="login__button">Sign in</button>
      </div>
    );
  }
}
