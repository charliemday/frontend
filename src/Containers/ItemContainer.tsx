import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ItemDetail from 'Components/ItemDetail';
import AddItemDetail from 'Components/AddItemDetail';
import Avatar from 'Components/Avatar';
import Modal from 'Components/Modal';

import NewTransactionForm, { FormData } from 'Forms/NewTransactionForm';
import TransactionActions, {
  TransactionSelectors,
} from 'Redux/TransactionRedux';
import { AuthenticationSelectors } from 'Redux/AuthenticationRedux';
import { avatarSrc } from 'Constants';
import { GlobalState } from 'Redux/types';

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

interface Props {
  createTransaction: (
    arg0: FormData,
    callback: { onSuccess: Function; onFailure: Function }
  ) => {};
  getTransactions: (arg0: string, agr1: any) => void;
  transactions: any;
  likeTransaction: (arg0: number, arg1: any) => void;
}

interface State {
  showModal: boolean;
  showAddModal: boolean;
  addTransactionSuccess: boolean;
  addTransactionError: boolean;
  transactionItem: object;
}

class ItemContainer extends Component<Props, State> {
  state = {
    showModal: false,
    showAddModal: false,
    addTransactionSuccess: false,
    addTransactionError: false,
    transactionItem: {
      id: null,
      currency: null,
      startSale: 0,
      endSale: 0,
      likes: 0,
      description: '',
    },
  };

  componentDidMount = async () => {
    await this.props.getTransactions('1', {});
  };

  handleAddTransaction = () => {
    this.setState({
      showAddModal: true,
    });
  };

  handleSubmitCallback = () => {
    return {
      onSuccess: () => this.setState({ addTransactionSuccess: true }),
      onFailure: () => this.setState({ addTransactionError: true }),
    };
  };

  handleSubmit = async (values: FormData) => {
    const { createTransaction } = this.props;
    await createTransaction(values, this.handleSubmitCallback());
  };

  renderAddModal = () => {
    const { addTransactionSuccess, addTransactionError } = this.state;
    return (
      <AddModalContainer>
        <NewTransactionForm
          onSubmit={this.handleSubmit}
          success={addTransactionSuccess}
          error={addTransactionError}
        />
      </AddModalContainer>
    );
  };

  handleLike = async (id: any) => {
    const callback = {
      onSuccess: () => {},
      onFailure: () => {},
    };
    await this.props.likeTransaction(id, callback);
  };

  renderModal = () => {
    const { showModal, transactionItem } = this.state;
    if (transactionItem === null) return null;
    return (
      <Modal
        id={transactionItem.id}
        show={showModal}
        close={() => this.setState({ showModal: false })}
        title={`${transactionItem.currency}${transactionItem.startSale} to ${transactionItem.currency}${transactionItem.endSale}`}
        description={transactionItem.description}
        likeButtons={true}
        onLike={() => this.handleLike(transactionItem.id)}
        likes={transactionItem.likes}
      />
    );
  };

  render() {
    const { showAddModal } = this.state;
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
        {this.renderModal()}
        <ProfileInfoContainer>
          <AvatarContainer>
            <Avatar src={avatarSrc} />
          </AvatarContainer>
          <p>{name}</p>
        </ProfileInfoContainer>
        <AddItemDetail onClick={this.handleAddTransaction} />
        <ItemDetailContainer>
          {this.props.transactions.map((item: any, key: string) => (
            <React.Fragment key={key}>
              <ItemDetail
                from={item.startSale}
                to={item.endSale}
                currency={item.currency}
                onClick={() =>
                  this.setState({
                    showModal: true,
                    transactionItem: item,
                  })
                }
              />
            </React.Fragment>
          ))}
        </ItemDetailContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state: GlobalState) => {
  return {
    transactions: TransactionSelectors.getTransactions(state),
    // isLoggedIn: AuthenticationSelectors.getIsLoggedIn(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    createTransaction: (data: FormData, callback: any) =>
      dispatch(TransactionActions.createTransactionRequest(data, callback)),
    getTransactions: (data: string, callback: any) =>
      dispatch(TransactionActions.getTransactionsRequest(data, callback)),
    likeTransaction: (data: number, callback: any) =>
      dispatch(TransactionActions.likeTransactionRequest(data, callback)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
