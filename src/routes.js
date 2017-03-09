import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './App.jsx';
import Home from './Home.jsx';
import Login from './authscreens/Login.jsx';
import Dashboard from './Dashboard.jsx';
import requireAuth from './utils/RequireAuth';

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)

export default (
  <Route path = "/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
    <Route path="/login" component={Login} />
    <Route path='*' component={NotFound} />
  </Route>


);
