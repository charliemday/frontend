import AuthenticationActions from 'Redux/AuthenticationRedux';
import { call, put } from 'redux-saga/effects';
import { AuthenticationApi } from 'Services/Api';

// const camelizeKeys = require('camelcase-keys');
// const decamelizeKeysDeep = require('decamelize-keys-deep');

const authApi = AuthenticationApi.create();

export function* loginSaga(
  api: object,
  action: {
    data: { username: string; password: string };
    callback: { onSuccess: Function; onFailure: Function };
  }
) {
  const { data } = action;
  const response = yield call(authApi.login, data);
  if (response.status === 200) {
    action.callback.onSuccess();
    yield put(AuthenticationActions.loginSuccess(response.data));
  } else {
    action.callback.onFailure();
    yield put(AuthenticationActions.loginFailure(response.data));
  }
}
