import React, { Component } from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

interface Props {
  title: string;
  user: {
    avatar: string;
  };
  onClick: () => void;
}

const Container = styled.div`
  border: solid 2px gray;
  border-radius: 5px;
  padding: 20px;
  flex: 1;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
`;

const ImageContainer = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

class FeedItem extends Component<Props> {
  state = {};
  render() {
    const {
      title,
      user: { avatar },
      onClick,
    } = this.props;
    return (
      <Container onClick={onClick}>
        <ImageContainer>
          <Avatar src={avatar} />
        </ImageContainer>
        <TextContainer>{title}</TextContainer>
      </Container>
    );
  }
}

export default FeedItem;
