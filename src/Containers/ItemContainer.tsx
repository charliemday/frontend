import React, { Component } from 'react';
import styled from 'styled-components';

import ItemDetail from 'Components/ItemDetail';
import AddItemDetail from 'Components/AddItemDetail';
import Avatar from 'Components/Avatar';
import Modal from 'Components/Modal';

import NewTransactionForm, { FormData } from 'Forms/NewTransactionForm';

import { avatarSrc } from 'Constants';

const data = [
  {
    from: 0.01,
    to: 0.02,
    currency: '£',
    title: 'Lorum Ipsum',
    description: 'Lorum ipsum...',
  },
  {
    from: 1.23,
    to: 1.24,
    currency: '£',
    title: 'Lorum Ipsum',
    description: 'Lorum ipsum...',
  },
];

const Container = styled.div`
  margin-top: 20px;
`;

const AvatarContainer = styled.div`
  height: 100px;
  width: 100px;
  margin: auto;
  margin-bottom: 20px;
`;

const ItemDetailContainer = styled.div``;

const AddModalContainer = styled.div``;

const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface Props {}

interface State {
  showModal: boolean;
  showAddModal: boolean;
  title: string;
  description: string;
}

class ItemContainer extends Component<Props, State> {
  state = {
    showModal: false,
    title: '',
    description: '',
    showAddModal: false,
  };

  handleAddTransaction = () => {
    this.setState({
      showAddModal: true,
    });
  };

  // TODO: Add this to the API
  handleSubmit = (values: FormData) => console.log('Values', values);

  renderAddModal = () => {
    return (
      <AddModalContainer>
        <NewTransactionForm onSubmit={this.handleSubmit} />
      </AddModalContainer>
    );
  };

  render() {
    const { showModal, description, title, showAddModal } = this.state;
    const name = 'Barack Obama';
    return (
      <Container>
        <Modal
          show={showAddModal}
          close={() => this.setState({ showAddModal: false })}
          title='Add a transaction'
          description='Add a your transaction here'
        >
          {this.renderAddModal()}
        </Modal>
        <Modal
          show={showModal}
          close={() => this.setState({ showModal: false })}
          title={title}
          description={description}
          likeButtons={true}
        ></Modal>
        <ProfileInfoContainer>
          <AvatarContainer>
            <Avatar src={avatarSrc} />
          </AvatarContainer>
          <p>{name}</p>
        </ProfileInfoContainer>
        <AddItemDetail onClick={this.handleAddTransaction} />
        <ItemDetailContainer>
          {data.map((item, key) => (
            <ItemDetail
              key={key}
              from={item.from}
              to={item.to}
              currency={item.currency}
              onClick={() =>
                this.setState({
                  showModal: true,
                  title: item.title,
                  description: item.description,
                })
              }
            />
          ))}
        </ItemDetailContainer>
      </Container>
    );
  }
}

export default ItemContainer;
