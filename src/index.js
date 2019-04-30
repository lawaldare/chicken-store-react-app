import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import promise from 'redux-promise';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';
import Chickens from './components/Chickens';
import Chicken from './components/Chicken';
import App from './components/App';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(promise, logger, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
