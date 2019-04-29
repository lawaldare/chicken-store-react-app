import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import thunk from 'redux-thunk';
import promise from 'redux-promise';

import logger from 'redux-logger';

import reducers from './reducers';
import Chickens from './components/Chickens';
import Chicken from './components/Chicken';
import App from './components/App';

const store = createStore(reducers, applyMiddleware(promise, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
