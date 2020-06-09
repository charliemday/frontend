import { all, takeLatest } from 'redux-saga/effects';
import { AuthenticationApi as authApi } from 'Services/Api';
import { AuthenticationTypes } from 'Redux/AuthenticationRedux';
import { loginSaga } from './workers';

/* ------------- API ------------- */

// We create our API
const api = authApi.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* authRoot() {
  yield all([takeLatest(AuthenticationTypes.LOGIN_REQUEST, loginSaga, api)]);
}
