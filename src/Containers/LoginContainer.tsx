import React, { Component, Dispatch } from 'react';
import LoginForm from 'Forms/LoginForm';
import styled from 'styled-components';

import { connect } from 'react-redux';

import AuthenticationActions from 'Redux/AuthenticationRedux';

const Container = styled.div`
  padding: 40px;
  width: 50%;
  margin: auto;
`;

interface Props {
  loginRequest: (arg0: object) => void;
}

class LoginContainer extends Component<Props> {
  state = {};

  handleSubmit = (values: any) => this.props.loginRequest(values);

  render() {
    return (
      <Container>
        <h1>Login</h1>
        <LoginForm onSubmit={this.handleSubmit} />
      </Container>
    );
  }
}

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    loginRequest: (data: object) =>
      dispatch(AuthenticationActions.loginRequest(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
