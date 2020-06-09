import React, { Component } from 'react';
import styled from 'styled-components';
import SignupForm from 'Forms/SignupForm';

const Container = styled.div`
  padding: 40px;
  width: 50%;
  margin: auto;
`;

class SignupContainer extends Component {
  state = {};
  render() {
    return (
      <Container>
        <h1>Signup</h1>
        <SignupForm />
      </Container>
    );
  }
}

export default SignupContainer;
