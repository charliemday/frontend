import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const createCustomActions = (prefix, request, success, failure) => {
  const action = {};
  action[`${prefix}Request`] = request;
  action[`${prefix}Success`] = success;
  action[`${prefix}Failure`] = failure;
  return action;
};

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  ...createCustomActions('login', ['data', 'callback'], ['payload'], ['error']),
});

export const AuthenticationTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
});

/* ------------- Reducers ------------- */

export const loginRequest = (state, { payload }) => state.merge({});

export const loginSuccess = (state, { payload }) => {
  return state.merge({
    token: payload.token,
  });
};

export const loginFailure = (state, { payload }) =>
  state.merge({
    error: true,
  });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  LOGIN_REQUEST: loginRequest,
  LOGIN_SUCCESS: loginSuccess,
  LOGIN_FAILURE: loginFailure,
});

/* ------------- Selectors ------------- */

export const AuthenticationSelectors = {};
