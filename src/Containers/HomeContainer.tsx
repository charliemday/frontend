import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import routes from 'Navigation/Routes';

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
        <h1 style={{ fontSize: 80 }}>1 to 1000</h1>
        <h2>
          <Link to={routes.feed}>Can you go from 1 to 1000?</Link>
        </h2>
      </Container>
    );
  }
}

export default HomeContainer;
