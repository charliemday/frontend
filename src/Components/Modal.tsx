import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

interface Props {
  show: boolean;
  close: () => void;
  title: string;
  description: string;
}

class CustomModal extends Component<Props> {
  state = {};
  render() {
    const { show, close, title, description } = this.props;
    return (
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CustomModal;
