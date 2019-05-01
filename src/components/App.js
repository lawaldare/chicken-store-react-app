import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chickens from './Chickens';
import Chicken from './Chicken';
import AddChicken from './AddChicken';
import UpdateChicken from './UpdateChicken';
//import Nav from './Nav'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/chickens/add" component={AddChicken} />
          <Route path="/chickens/edit/:id" component={UpdateChicken} />
          <Route path="/chickens/:id" component={Chicken} />
          <Route path="/" component={Chickens} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
