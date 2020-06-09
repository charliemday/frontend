import { all } from 'redux-saga/effects';
import authRoot from './AuthenticationSagas/watchers';

export default function* rootSaga() {
  yield all([authRoot()]);
}
