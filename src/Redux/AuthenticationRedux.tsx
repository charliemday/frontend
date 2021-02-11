import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

import { GlobalState, AuthenticationState } from "Redux/types";

const createCustomActions = (
  prefix: string,
  request: string[],
  success: string[],
  failure: string[]
) => {
  const action: any = {};
  action[`${prefix}Request`] = request;
  action[`${prefix}Success`] = success;
  action[`${prefix}Failure`] = failure;
  return action;
};

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  ...createCustomActions("login", ["data", "callback"], ["payload"], ["error"]),
  ...createCustomActions(
    "signup",
    ["data", "callback"],
    ["payload"],
    ["error"]
  ),
  ...createCustomActions(
    "getUserDetails",
    ["callback"],
    ["payload"],
    ["error"]
  ),
  logout: [],
});

export const AuthenticationTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE: AuthenticationState = Immutable({
  fetching: false,
  token: null,
});

/* ------------- Reducers ------------- */

export const loginRequest = (state: AuthenticationState, action: any) => {
  return {
    ...state,
  };
};

export const loginSuccess = (state: AuthenticationState, action: any) => {
  const { payload } = action;
  return {
    ...state,
    token: payload.token,
  };
};

export const loginFailure = (state: AuthenticationState, action: any) => ({
  ...state,
  error: true,
});

export const logout = (state: AuthenticationState) => state;

export const signupRequest = (state: AuthenticationState, action: any) => {
  return state;
};

export const signupSuccess = (state: AuthenticationState, action: any) => {
  return {
    ...state,
    token: action.payload.token,
  };
};

export const signupFailure = (state: AuthenticationState, action: any) => {
  return state;
};

export const getUserDetailsRequest = (
  state: AuthenticationState,
  action: any
) => {
  return state;
};

export const getUserDetailsSuccess = (
  state: AuthenticationState,
  action: any
) => {
  return state;
};

export const getUserDetailsFailure = (
  state: AuthenticationState,
  action: any
) => {
  return state;
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,

  [Types.SIGNUP_REQUEST]: signupRequest,
  [Types.SIGNUP_SUCCESS]: signupSuccess,
  [Types.SIGNUP_FAILURE]: signupFailure,

  [Types.GET_USER_DETAILS_REQUEST]: getUserDetailsRequest,
  [Types.GET_USER_DETAILS_SUCCESS]: getUserDetailsSuccess,
  [Types.GET_USER_DETAILS_FAILURE]: getUserDetailsFailure,

  [Types.LOGOUT]: logout,
});

/* ------------- Selectors ------------- */

export const AuthenticationSelectors = {
  getToken: (state: GlobalState) => state.authentication.token,
};
