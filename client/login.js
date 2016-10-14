import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav'
import { browserHistory } from 'react-router'

class Login2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('login2 props',this.props)
    return (
      <div></div>
    )
  }
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(evt) {
    evt.preventDefault()

    const username = this.refs.username.value;
    const password = this.refs.password.value;

    this.props.sendLoginData({
      username: username,
      password: password
    });

    this.refs.username.value = '';
    this.refs.password.value = '';
  }

  render() {
    console.log('login props', this.props)
    return (
      <div>
        <Login2 />
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="username" placeholder="username"/>
          <input type="password" ref="password" placeholder="password"/>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    )
  }
}
