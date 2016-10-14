import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import ReactDOM from 'react-dom';
import DashBoard from './client/dashboard'
import Login from './client/login'
import Signup from './client/signup'
import Profile from './client/profile'
import Nav from './client/nav';
import Container from './Container';
import Expense from './client/expense'
import Home from './client/home'



ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Container}>
        <IndexRoute component={Home}/>
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="/expense" component={Expense} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('content'));
