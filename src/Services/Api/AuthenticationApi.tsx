import apisauce from 'apisauce';
import { APIServer } from 'Config/AppConfig';

// ------------ Auxillary Functions ------------ //

// const authPrefix = "Bearer";

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

  // ------------ Return all APIs ------------ //

  return {
    // Insert API calls here
    login,
  };
};

// ------------ Main Export ------------ //

export default {
  create,
};
