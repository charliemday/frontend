import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './Routes';

import Navbar from 'Containers/Navbar';
import HomeContainer from 'Containers/HomeContainer';
import LoginContainer from 'Containers/LoginContainer';
import SignupContainer from 'Containers/SignupContainer';

class MainRoute extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Route path={routes.base} component={Navbar} />
        <Switch>
          <Route exact path={routes.base} component={HomeContainer} />
          <Route path={routes.login} component={LoginContainer} />
          <Route path={routes.signup} component={SignupContainer} />
        </Switch>
      </Router>
    );
  }
}

export default MainRoute;
