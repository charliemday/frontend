import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { GlobalState, TransactionState, TransactionType } from 'Redux/types';

const createCustomActions = (
  prefix: string,
  request: string[],
  success: string[],
  failure: string[]
) => {
  const action: any = {};
  action[`${prefix}Request`] = request;
  action[`${prefix}Success`] = success;
  action[`${prefix}Failure`] = failure;
  return action;
};

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  ...createCustomActions(
    'createTransaction',
    ['data', 'callback'],
    ['payload'],
    ['error']
  ),
  ...createCustomActions(
    'getTransactions',
    ['data', 'callback'],
    ['payload'],
    ['error']
  ),
  ...createCustomActions(
    'likeTransaction',
    ['data', 'callback'],
    ['payload'],
    ['error']
  ),
});

export const TransactionTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  transactions: [],
});

/* ------------- Reducers ------------- */

export const createTransactionRequest = (
  state: TransactionState,
  action: any
) => {
  return state;
};

export const createTransactionSuccess = (
  state: TransactionState,
  action: any
) => {
  return state;
};

export const createTransactionFailure = (
  state: TransactionState,
  action: any
) => {
  return state;
};

export const getTransactionsRequest = (
  state: TransactionState,
  action: any
) => {
  return state;
};

export const getTransactionsSuccess = (
  state: TransactionState,
  action: any
) => {
  return {
    ...state,
    transactions: action.payload,
  };
};

export const getTransactionsFailure = (
  state: TransactionState,
  action: any
) => {
  return state;
};

export const likeTransactionRequest = (
  state: TransactionState,
  action: any
) => {
  return state;
};

export const likeTransactionSuccess = (
  state: TransactionState,
  action: any
) => {
  return {
    ...state,
    transactions: state.transactions.map((t: TransactionType) => {
      if (t.id === action.payload.id) {
        t.likes = action.payload.likes;
        return t;
      }
      return t;
    }),
  };
};

export const likeTransactionFailure = (
  state: TransactionState,
  action: any
) => {
  return {
    ...state,
  };
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_TRANSACTION_REQUEST]: createTransactionRequest,
  [Types.CREATE_TRANSACTION_SUCCESS]: createTransactionSuccess,
  [Types.CREATE_TRANSACTION_FAILURE]: createTransactionFailure,

  [Types.GET_TRANSACTIONS_REQUEST]: getTransactionsRequest,
  [Types.GET_TRANSACTIONS_SUCCESS]: getTransactionsSuccess,
  [Types.GET_TRANSACTIONS_FAILURE]: getTransactionsFailure,

  [Types.LIKE_TRANSACTION_REQUEST]: likeTransactionRequest,
  [Types.LIKE_TRANSACTION_SUCCESS]: likeTransactionSuccess,
  [Types.LIKE_TRANSACTION_FAILURE]: likeTransactionFailure,
});

/* ------------- Selectors ------------- */

export const TransactionSelectors = {
  getTransactions: (state: GlobalState) => state.transaction.transactions,
};
