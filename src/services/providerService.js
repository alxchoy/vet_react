import { Alert } from 'react-native';

import api from './apiService';
import constants from '../utils/constants';

const getProviderData = async providerId => {
  const response = await api.get(`api/provider/${providerId}`);

  if (response.status !== constants.successCode) {
    Alert.alert('', response.data.error, [{ text: 'OK', onPress: () => {} }]);
    return null;
  }

  return response.data;
};

const getServiceList = async () => {
  const response = await api.get('api/pet/getServices');

  if (response.status !== constants.successCode) {
    Alert.alert('', response.data.error, [{ text: 'OK', onPress: () => {} }]);
    return null;
  }

  return response.data;
};

const getProvidersByService = async serviceId => {
  const response = await api.get(`api/pet/getProviderByService/${serviceId}`);

  if (response.status !== constants.successCode) {
    Alert.alert('', response.data.error, [{ text: 'OK', onPress: () => {} }]);
    return null;
  }

  return response.data;
};

export default {
  getProviderData,
  getServiceList,
  getProvidersByService,
};
