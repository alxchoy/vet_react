import axios from 'axios';

import constants from '../../utils/constants';
import storageApi from '../storage';

// interceptors
axios.interceptors.request.use(
  async config => {
    const token = await storageApi.getData('@vet_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(token);

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const get = url =>
  axios.get(`${constants.urlBase}/${url}`).catch(err => {
    console.error(err.response);
    console.error(err.request);

    return err.response;
  });

const post = (url, data) =>
  axios.post(`${constants.urlBase}/${url}`, data).catch(err => {
    console.error(err.response);
    console.error(err.request);

    return err.response;
  });

const api = {
  get,
  post,
};

export default api;
