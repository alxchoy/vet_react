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

export default {
  login,
};
