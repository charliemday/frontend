import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './Routes';

import Navbar from 'Containers/Navbar';
import FeedContainer from 'Containers/FeedContainer';

class MainRoute extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Route path={routes.base} component={Navbar} />
        <Switch>
          <Route path={routes.feed} component={FeedContainer} />
        </Switch>
      </Router>
    );
  }
}

export default MainRoute;