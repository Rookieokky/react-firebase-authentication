import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader';
import './css/index.css';
import routes from './routes'
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render((
  <AppContainer>
    <Router history={browserHistory}>
    {routes}
    </Router>
  </AppContainer>
), document.getElementById('root'))

if (module.hot) {
   module.hot.accept('./App.jsx', () => {
     const NewRoot = require('./App.jsx').default;
     ReactDOM.render(
       <AppContainer>
         <NewRoot history={history} />
       </AppContainer>,
       document.getElementById('root')
    );
  });
}
