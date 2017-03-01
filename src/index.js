import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
// import { AppContainer } from 'react-hot-loader';
import App from './App.jsx';
import Home from './Home.jsx';
import Login from './authscreens/Login.jsx';
import Dashboard from './Dashboard.jsx';
import requireAuth from './utils/RequireAuth';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';

if (module.hot) {
  ReactDOM.render((
      <Router history={browserHistory}>
        <Route path="/login" component={Login} />
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
        </Route>
      </Router>
  ), document.getElementById('root'))
}
