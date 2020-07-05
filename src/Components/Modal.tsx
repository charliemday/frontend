import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';

interface Props {
  show: boolean;
  close: () => void;
  title: string;
  description: string;
  children?: React.ReactNode;
  likeButtons?: boolean;
}

const ButtonsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
`;

class CustomModal extends Component<Props> {
  state = {};
  render() {
    const {
      show,
      close,
      title,
      description,
      children,
      likeButtons = false,
    } = this.props;
    return (
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children ? children : <p>{description}</p>}</Modal.Body>
        <Modal.Footer>
          {likeButtons && (
            <ButtonsContainer>
              <AiOutlineLike fontSize={32} cursor='pointer' />
            </ButtonsContainer>
          )}
          <Button variant='secondary' onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CustomModal;
