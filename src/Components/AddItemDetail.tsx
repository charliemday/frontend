import React, { Component } from 'react';
import styled from 'styled-components';
import { IoMdAddCircle } from 'react-icons/io';

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

interface Props {
  onClick?: () => void;
}

class AddItemDetail extends Component<Props> {
  state = {};
  render() {
    const { onClick = () => {} } = this.props;
    return (
      <Container>
        <IconContainer onClick={onClick}>
          <IoMdAddCircle fontSize={64} />
        </IconContainer>
      </Container>
    );
  }
}

export default AddItemDetail;
