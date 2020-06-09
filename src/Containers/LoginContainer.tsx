import React, { Component } from 'react';
import LoginForm from 'Forms/LoginForm';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px;
  width: 50%;
  margin: auto;
`;

class LoginContainer extends Component {
  state = {};
  render() {
    return (
      <Container>
        <h1>Login</h1>
        <LoginForm />
      </Container>
    );
  }
}

export default LoginContainer;
