import AuthenticationActions, {
  AuthenticationSelectors,
} from 'Redux/AuthenticationRedux';
import { call, put, select } from 'redux-saga/effects';
import AuthenticationApi from 'Services/Api';

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

export function* signupSaga(
  api: any,
  action: {
    data: { username: string; password: string };
    callback: { onSuccess: Function; onFailure: Function };
  }
) {
  const response = yield call(api.signup, action.data);
  if (response.ok) {
    yield put(AuthenticationActions.signupSuccess(response.data));
    action.callback.onSuccess();
  } else {
    action.callback.onFailure(response.data);
    yield put(AuthenticationActions.signupFailure(response.data));
  }
}

export function* getUserDetailsSaga(api: any, action: any) {
  const token = yield select(AuthenticationSelectors.getToken);
  const response = yield call(api.getUserDetails, token);
  console.log('Action', action);
  if (response.ok) {
    action.callback.onSuccess();
    yield put(AuthenticationActions.getUserDetailsSuccess(response.data));
  } else {
    action.callback.onFailure();
    yield put(AuthenticationActions.getUserDetailsFailure(response.data));
  }
}
