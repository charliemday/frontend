export interface AuthenticationState {
  fetching: boolean;
  token: string | null;
}

export interface GlobalState {
  authentication: AuthenticationState;
}

export {};
