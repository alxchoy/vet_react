import { Alert } from 'react-native';

import api from './apiService';
import storageService from './storageService';
import constants from '../utils/constants';

const getPetList = async () => {
  // TODO: get clientId from storage
  const response = await api.get('api/pet/ByClient/2');

  if (response.status !== constants.successCode) {
    Alert.alert('', response.data.error, [{ text: 'OK', onPress: () => {} }]);
    return null;
  }

  return response.data;
};

export default {
  getPetList,
};
