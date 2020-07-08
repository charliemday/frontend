import { all, takeLatest } from 'redux-saga/effects';
import API from 'Services/Api';
import { TransactionTypes } from 'Redux/TransactionRedux';
import {
  createTransactionSaga,
  getTransactionsSaga,
  likeTransactionSaga,
} from './workers';

/* ------------- API ------------- */

// We create our API
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* transactionRoot() {
  yield all([
    takeLatest(
      TransactionTypes.CREATE_TRANSACTION_REQUEST,
      createTransactionSaga,
      api
    ),
    takeLatest(
      TransactionTypes.GET_TRANSACTIONS_REQUEST,
      getTransactionsSaga,
      api
    ),
    takeLatest(
      TransactionTypes.LIKE_TRANSACTION_REQUEST,
      likeTransactionSaga,
      api
    ),
  ]);
}
