import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chickens from './Chickens';
import Chicken from './Chicken';
//import Nav from './Nav'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/chickens/:id" component={Chicken} />
          <Route path="/" component={Chickens} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
