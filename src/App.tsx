import React from 'react';
import { connect } from 'react-redux';
import MainRoute from './Navigation/MainRoute';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return <MainRoute />;
};

export default connect(null)(App);
