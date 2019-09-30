import axios from 'axios';

import constants from '../utils/constants';
import storageApi from './storageService';

// interceptors
axios.interceptors.request.use(
  async config => {
    const token = await storageApi.getData('@vet_token');
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }

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
