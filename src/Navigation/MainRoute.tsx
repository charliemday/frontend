import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './Routes';

import Navbar from 'Containers/Navbar';
import FeedContainer from 'Containers/FeedContainer';
import ItemContainer from 'Containers/ItemContainer';
import LoginContainer from 'Containers/LoginContainer';
import SignupContainer from 'Containers/SignupContainer';

class MainRoute extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Route path={routes.base} component={Navbar} />
        <Switch>
          <Route path={routes.login} component={LoginContainer} />
          <Route path={routes.feed} component={FeedContainer} />
          <Route path={routes.item} component={ItemContainer} />
          <Route path={routes.signup} component={SignupContainer} />
        </Switch>
      </Router>
    );
  }
}

export default MainRoute;
