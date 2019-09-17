import { Alert } from 'react-native';

import api from './apiService';
import storageService from './storageService';
import constants from '../utils/constants';

const getPetList = async () => {
  const clientId = await storageService.getData('@vet_clientId');
  const response = await api.get(`api/pet/ByClient/${clientId}`);

  if (response.status !== constants.successCode) {
    Alert.alert('', response.data.error, [{ text: 'OK', onPress: () => {} }]);
    return null;
  }

  return response.data;
};

const getBreedList = async specieId => {
  const response = await api.get(`api/maintenance/race/search?specieId=${specieId}&filter=`);

  if (response.status !== constants.successCode) {
    Alert.alert('', response.data.error, [{ text: 'OK', onPress: () => {} }]);
    return null;
  }

  return response.data;
};

const createPet = async (request, handleResponse) => {
  const clientId = await storageService.getData('@vet_clientId');
  const response = await api.post('api/pet/create', { ...request, clientId });

  if (response.status !== constants.successCode) {
    Alert.alert('', response.data.error, [{ text: 'OK', onPress: () => {} }]);
    return null;
  }

  handleResponse();
};

export default {
  getPetList,
  getBreedList,
  createPet,
};
