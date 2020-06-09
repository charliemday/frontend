import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const createCustomActions = (prefix, request, success, failure) => {
  const action = {};
  action[`${prefix}Request`] = request;
  action[`${prefix}Success`] = success;
  action[`${prefix}Failure`] = failure;
  return action;
};

const createCustomTypes = (prefix, types) => {
  const type = {};
  type[`[${types}.${prefix.toUpperCase()}_REQUEST]`] = `${prefix}Request`;
  type[`[${types}.${prefix.toUpperCase()}_SUCCESS]`] = `${prefix}Success`;
  type[`[${types}.${prefix.toUpperCase()}_FAILURE]`] = `${prefix}Failure`;
  return type;
};

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  ...createCustomActions('login', ['resolve'], ['payload'], ['error']),
});

export const AuthenticationsTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
});

/* ------------- Reducers ------------- */

export const loginRequest = (state, { payload }) =>
  state.merge({
    fetching: true,
  });

export const loginSuccess = (state, action) => state.merge({});

export const loginFailure = (state, { payload }) => state.merge({});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  ...createCustomTypes('login', Types),
});

/* ------------- Selectors ------------- */

export const AuthenticationSelectors = {};
