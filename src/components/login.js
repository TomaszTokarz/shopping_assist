import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

class Login extends Component {
  renderEmailField(field) {
    return (
      <div>

        <input
          className="login__input"
          placeholder="Type your e-mail"
          type="email"
          {...field.input}
        />
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = { term: ""};
    this.ui = {
      loginInput : ".js-login-input"
    }
  }

  showPasswordField(event) {
    console.log(event.target);
    console.log(this.ui);
  }

  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="login">
        <form>
          <Field
            name="email"
            component={this.renderEmailField}
          />

          <input type="password" className="login__input inactive"></input>
          <button className="login__button" onClick={this.showPasswordField}>Log in</button>

          <input type="email" className="login__input" placeholder="Type your e-mail"></input>
          <button className="login__button">Sign in</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "LoginForm"
})(Login);
