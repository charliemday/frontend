import apisauce from 'apisauce';
import { APIServer } from 'Config/AppConfig';

import { FormData } from 'Forms/NewTransactionForm';

// ------------ Auxillary Functions ------------ //

const authPrefix = 'Token';

const create = (baseURL = APIServer) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      Accept: '*/*',
    },
    timeout: 10000,
  });

  // ------------ Your API calls ------------ //

  const login = (data: { username: string; password: string }) => {
    return api.post(`login/`, {
      ...data,
    });
  };

  const signup = (data: { email: string; password: string }) => {
    return api.post(`signup/`, {
      ...data,
    });
  };

  const getUserDetails = (token: string) => {
    api.setHeader('Authorization', `${authPrefix} ${token}`);
    return api.get('userDetails/');
  };

  // TODO: possibly non authentication

  const profile = (username: string) => {
    return api.get(`profile/${username}`);
  };

  const editProfile = (token: string, data: any) => {
    return api.put(`editProfile/`, {
      ...data,
    });
  };

  const feed = (page: number = 1) => api.get(`feed/${page}`);

  const createTransaction = ({
    token,
    data,
  }: {
    token: string;
    data: FormData;
  }) => {
    api.setHeader('Authorization', `${authPrefix} ${token}`);
    return api.post(`createTransaction/`, {
      ...data,
    });
  };

  const getTransactions = (pk: string) => api.get(`transactions/${pk}`);

  const editTransaction = (
    token: string,
    transactionId: number,
    data: FormData
  ) => {
    api.setHeader('Authorization', `${authPrefix} ${token}`);
    return api.put(`editTransaction/${transactionId}/`, {
      ...data,
    });
  };

  const likeTransaction = ({
    token,
    data,
  }: {
    token: string;
    data: number;
  }) => {
    api.setHeader('Authorization', `${authPrefix} ${token}`);
    return api.post(`likeTransaction/${data}`);
  };

  // ------------ Return all APIs ------------ //

  return {
    // Insert API calls here
    login,
    signup,
    getUserDetails,
    // ==== //
    profile,
    feed,
    createTransaction,
    editTransaction,
    likeTransaction,
    editProfile,
    getTransactions,
  };
};

// ------------ Main Export ------------ //

export default {
  create,
};
