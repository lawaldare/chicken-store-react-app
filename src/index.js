import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import thunk from 'redux-thunk';
import promise from 'redux-promise';

import reducers from './reducers';
import Chickens from './components/Chickens';
import Chicken from './components/Chicken';

const store = createStore(reducers, applyMiddleware(promise));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/chickens/:id" component={Chicken} />
        <Route path="/" component={Chickens} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
