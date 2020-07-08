import TransactionActions from 'Redux/TransactionRedux';
import { AuthenticationSelectors } from 'Redux/AuthenticationRedux';
import { call, put, select } from 'redux-saga/effects';

const camelizeKeys = require('camelcase-keys');
const decamelizeKeysDeep = require('decamelize-keys-deep');

export function* createTransactionSaga(api: any, action: any) {
  const token = yield select(AuthenticationSelectors.getToken);
  const data = decamelizeKeysDeep(action.data);
  const response = yield call(api.createTransaction, { token, data });
  if (response.ok) {
    action.callback.onSuccess();
    yield put(TransactionActions.createTransactionSuccess(response.data));
  } else {
    action.callback.onFailure();
    yield put(TransactionActions.createTransactionFailure(response.data));
  }
}

export function* getTransactionsSaga(api: any, action: any) {
  const response = yield call(api.getTransactions, action.data);
  const data = camelizeKeys(response.data);
  if (response.ok) {
    // action.callback.onSuccess();
    yield put(TransactionActions.getTransactionsSuccess(data));
  } else {
    // action.callback.onFailure();
    yield put(TransactionActions.getTransactionsFailure(data));
  }
}

export function* likeTransactionSaga(api: any, action: any) {
  const { data } = action;
  const token = yield select(AuthenticationSelectors.getToken);
  const response = yield call(api.likeTransaction, { token, data });
  if (response.ok) {
    action.callback.onSuccess();
    yield put(TransactionActions.likeTransactionSuccess(response.data));
  } else {
    action.callback.onFailure();
    yield put(TransactionActions.likeTransactionFailure(response.data));
  }
}
