import api from './apiService';

import constants from '../../utils/constants';

const createClient = (userData, handleResponse) => {
  api
    .post('api/client/createUser', userData)
    .then(res => res.status === constants.successCode && handleResponse(res));
};

export default {
  createClient,
};
