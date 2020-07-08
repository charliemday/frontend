import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';

interface Props {
  show: boolean;
  close: () => void;
  id?: number | null;
  title: string;
  description: string;
  children?: React.ReactNode;
  likeButtons?: boolean;
  onLike?: () => void;
  likes?: number;
}

const ButtonsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
`;

const LikesContainer = styled.div`
  display: flex;
  align-items: center;
  justiyf-content: center;
  padding-right: 10px;
  padding-left: 10px;
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
      id = null,
      onLike = () => {},
      likeButtons = false,
      likes = 0,
    } = this.props;
    return (
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children ? children : <p>{description}</p>}</Modal.Body>
        <Modal.Footer>
          {likeButtons && id && (
            <ButtonsContainer>
              <LikesContainer>{likes}</LikesContainer>
              <AiOutlineLike
                fontSize={32}
                cursor='pointer'
                onClick={() => onLike()}
              />
            </ButtonsContainer>
          )}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CustomModal;
