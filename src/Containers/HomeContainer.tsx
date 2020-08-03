import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 20;
  margin: 20;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

class HomeContainer extends Component {
  state = {};
  render() {
    return (
      <Container>
        <h1 style={{ fontSize: 80 }}>Welcome to Frontend</h1>
      </Container>
    );
  }
}

export default HomeContainer;
