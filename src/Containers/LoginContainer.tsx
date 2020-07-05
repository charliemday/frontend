import React, { Component, Dispatch } from 'react';
import LoginForm from 'Forms/LoginForm';
import styled from 'styled-components';

import { connect } from 'react-redux';

import AuthenticationActions from 'Redux/AuthenticationRedux';
import Routes from 'Navigation/Routes';

const Container = styled.div`
  padding: 40px;
  width: 50%;
  margin: auto;
`;

interface Props {
  loginRequest: (arg0: object, arg1: object) => void;
  history: any;
}

interface State {
  error: boolean;
}

class LoginContainer extends Component<Props, State> {
  state = {
    error: false,
  };

  loginCallback = () => {
    return {
      onSuccess: () => this.props.history.push(Routes.feed),
      onFailure: () => this.setState({ error: true }),
    };
  };

  handleSubmit = (values: any) =>
    this.props.loginRequest(values, this.loginCallback());

  render() {
    return (
      <Container>
        <h1>Login</h1>
        <LoginForm onSubmit={this.handleSubmit} error={this.state.error} />
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    loginRequest: (data: object, callback: object) =>
      dispatch(AuthenticationActions.loginRequest(data, callback)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
