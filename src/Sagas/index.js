import { all } from 'redux-saga/effects';
import authRoot from './AuthenticationSagas/watchers';
import transactionRoot from './TransactionSagas/watchers';

export default function* rootSaga() {
  yield all([authRoot()]);
}
