import React, { Component } from "react";
import styled from "styled-components";
import reduxImage from "Assets/redux.png";
import routerImage from "Assets/react-router.png";
import typescriptImage from "Assets/typescript.png";
import sagaImage from "Assets/redux-sagas.png";

const Container = styled.div`
  padding: 20;
  margin: 20;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  margin-top: 20px;
  cursor: pointer;
`;

const Icon = styled.img`
  height: 50px;
  margin: 20px;
`;

class HomeContainer extends Component {
  state = {};
  render() {
    return (
      <Container>
        <h1 style={{ fontSize: 50 }}>
          Welcome to the Frontend Authentication Boilerplate
        </h1>
        <ImageContainer>
          <Icon src={typescriptImage} title="TypeScript" />
          <Icon src={reduxImage} title="Redux" />
          <Icon src={routerImage} title="React-Router" />
          <Icon src={sagaImage} title="Redux-Sagas" />
        </ImageContainer>
      </Container>
    );
  }
}

export default HomeContainer;
