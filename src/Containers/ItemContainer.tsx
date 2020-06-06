import React, { Component } from 'react';
import styled from 'styled-components';

import ItemDetail from 'Components/ItemDetail';
import Avatar from 'Components/Avatar';
import Modal from 'Components/Modal';

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
`;

interface Props {}

interface State {
  showModal: boolean;
  title: string;
  description: string;
}

class ItemContainer extends Component<Props, State> {
  state = {
    showModal: false,
    title: '',
    description: '',
  };
  render() {
    const { showModal, description, title } = this.state;
    return (
      <Container>
        <Modal
          show={showModal}
          close={() => this.setState({ showModal: false })}
          title={title}
          description={description}
        />
        <AvatarContainer>
          <Avatar src={avatarSrc} />
        </AvatarContainer>
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
      </Container>
    );
  }
}

export default ItemContainer;
