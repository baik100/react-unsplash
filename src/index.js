import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router} from 'react-router-dom';
import HISTORY from './helpers/HistoryHelper';
import {Provider} from 'react-redux';
import store from './store';

import './scss/style.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={HISTORY}>
      <App/>
    </Router>
  </Provider> , document.getElementById('root'));
