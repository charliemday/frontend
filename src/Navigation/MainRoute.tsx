import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './Routes';

import Navbar from 'Containers/Navbar';
import FeedContainer from 'Containers/FeedContainer';
import ItemContainer from 'Containers/ItemContainer';
import LoginContainer from 'Containers/LoginContainer';
import SignupContainer from 'Containers/SignupContainer';
import HomeContainer from 'Containers/HomeContainer';

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
          <Route path={routes.feed} component={FeedContainer} />
          <Route exact path={routes.item} component={ItemContainer} />
        </Switch>
      </Router>
    );
  }
}

export default MainRoute;
