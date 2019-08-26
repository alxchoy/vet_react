import api from './apiService';

import constants from '../../utils/constants';

const login = (userData, handleResponse) => {
  const data = new URLSearchParams();
  data.append('userName', userData.userName);
  data.append('password', userData.userPassword);
  data.append('grant_type', 'password');
  data.append('rolId', constants.rolId);

  api.post('token', data).then(handleResponse);
};

const getId = handleResponse => {
  api
    .get('api/token/claims')
    .then(res => res.status === constants.successCode && handleResponse(res));
};

const createClient = (userData, handleResponse) => {
  api
    .post('api/client/createUser', userData)
    .then(res => res.status === constants.successCode && handleResponse(res));
};

export default {
  login,
  getId,
  createClient,
};
