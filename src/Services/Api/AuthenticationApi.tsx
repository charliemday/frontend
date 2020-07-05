import apisauce from 'apisauce';
import { APIServer } from 'Config/AppConfig';

import { FormData } from 'Forms/NewTransactionForm';

// ------------ Auxillary Functions ------------ //

const authPrefix = 'Bearer';

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

  const createTransaction = (token: string, data: FormData) => {
    api.setHeader('Authorization', `${authPrefix} ${token}`);
    return api.post(`createTransaction/`, {
      ...data,
    });
  };

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

  const likeTransaction = (token: string, transactionId: number) => {
    api.setHeader('Authorization', `${authPrefix} ${token}`);
    return api.post(`likeTransaction/${transactionId}/`);
  };

  // ------------ Return all APIs ------------ //

  return {
    // Insert API calls here
    login,
    signup,
    // ==== //
    profile,
    feed,
    createTransaction,
    editTransaction,
    likeTransaction,
    editProfile,
  };
};

// ------------ Main Export ------------ //

export default {
  create,
};
