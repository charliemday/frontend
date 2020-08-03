import apisauce from 'apisauce';
import { APIServer } from 'Config/AppConfig';

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

  // ------------ Return all APIs ------------ //

  return {
    // Insert API calls here
    login,
    signup,
    getUserDetails,
    // ==== //
    profile,
    editProfile,
  };
};

// ------------ Main Export ------------ //

export default {
  create,
};
