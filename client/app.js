import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';
import DashBoard from './dashboard'
import Login from './login'
import Signup from './signup'
import Profile from './profile'
import Nav from './nav';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Nav />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default App;
