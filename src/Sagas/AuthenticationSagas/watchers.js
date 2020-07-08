import { all, takeLatest } from 'redux-saga/effects';
import AuthenticationApi from 'Services/Api';
import { AuthenticationTypes } from 'Redux/AuthenticationRedux';
import { loginSaga, signupSaga, getUserDetailsSaga } from './workers';

/* ------------- API ------------- */

// We create our API
const api = AuthenticationApi.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* authRoot() {
  yield all([
    takeLatest(AuthenticationTypes.LOGIN_REQUEST, loginSaga, api),
    takeLatest(AuthenticationTypes.SIGNUP_REQUEST, signupSaga, api),
    takeLatest(
      AuthenticationTypes.GET_USER_DETAILS_REQUEST,
      getUserDetailsSaga,
      api
    ),
  ]);
}
