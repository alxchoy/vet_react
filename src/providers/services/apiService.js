import axios from 'axios';

import constants from '../../utils/constants';

const get = url =>
  axios.get(url).catch(err => {
    console.error(err.response);
    console.error(err.request);
  });

const post = (url, data) =>
  axios.post(`${constants.urlBase}/${url}`, data).catch(err => {
    console.error(err.response);
    console.error(err.request);
  });

// interceptors
axios.interceptors.request.use(
  config => {
    console.log('interceptor!!!');
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const api = {
  get,
  post,
};

export default api;
