import { Alert } from 'react-native';

import api from './apiService';
import storageService from './storageService';
import { getLookups } from './lookupsService';
import constants from '../utils/constants';

const getId = async handleResponse => {
  const response = await api.get('api/token/claims');

  if (response.status === constants.successCode) {
    await storageService.storeData('@vet_clientId', response.data.idLogIn);
    handleResponse();
  } else {
    Alert.alert('', response.data.error, [
      {
        text: 'OK',
        onPress: () => {},
      },
    ]);
  }
};

const login = async (userData, handleResponse) => {
  const data = new URLSearchParams();
  data.append('userName', userData.userName);
  data.append('password', userData.userPassword);
  data.append('grant_type', 'password');
  data.append('rolId', constants.rolId);

  const response = await api.post('token', data);

  if (response.status === constants.successCode) {
    await storageService.storeData('@vet_token', response.data.access_token);
    getId(handleResponse);
    getLookups();
  } else {
    Alert.alert('', response.data.error, [
      {
        text: 'OK',
        onPress: () => {},
      },
    ]);

    return false;
  }
};

const createClient = async (userData, handleResponse) => {
  const response = await api.post('api/client/createUser', userData);

  if (response.status === constants.successCode) {
    handleResponse(response);
  } else {
    Alert.alert('', response.data.error, [
      {
        text: 'OK',
        onPress: () => {},
      },
    ]);
  }
};

const updateClient = async (userData, handleResponse) => {
  const clientId = await storageService.getData('@vet_clientId');
  const response = await api.post('api/client/updateDataClient', { ...userData, clientId });

  if (response.status === constants.successCode) {
    handleResponse(response);
  } else {
    Alert.alert('', response.data.error, [
      {
        text: 'OK',
        onPress: () => {},
      },
    ]);
  }
};

const getClient = async () => {
  const clientId = await storageService.getData('@vet_clientId');
  const response = await api.get(`api/client/${clientId}`);

  if (response.status === constants.successCode) {
    return response.data;
  }

  Alert.alert('', response.data.error, [
    {
      text: 'OK',
      onPress: () => {},
    },
  ]);
};

export default {
  login,
  getId,
  createClient,
  updateClient,
  getClient,
};
