import { TransactionTypes } from './TransactionRedux';

export type TransactionType = any;

export interface TransactionState {
  transactions: any;
}

export interface AuthenticationState {
  fetching: boolean;
  token: string | null;
}

export interface GlobalState {
  authentication: AuthenticationState;
  transaction: TransactionState;
}

export {};
