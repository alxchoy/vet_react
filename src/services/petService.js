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
    return;
  }

  handleResponse();
};

const getPetAlimentationList = async petId => {
  const response = await api.get(`api/pet/getAlimentationByPet?PetId=${petId}&AlimentationName=`);

  if (response.status !== constants.successCode) {
    Alert.alert('', response.data.error, [{ text: 'OK', onPress: () => {} }]);
    return null;
  }

  return response.data;
};

const addPetALimentation = async (request, handleResponse) => {
  const response = await api.post('api/pet/addAlimentation', request);

  if (response.status !== constants.successCode) {
    Alert.alert('', response.data.error, [{ text: 'OK', onPress: () => {} }]);
    return;
  }

  handleResponse();
};

const deletePetAlimentation = async (petAlimentationId, handleResponse) => {
  const response = await api.get(`api/pet/deleteAlimentation/${petAlimentationId}`);

  if (response.status !== constants.successCode) {
    Alert.alert('', response.data.error, [{ text: 'OK', onPress: () => {} }]);
    return;
  }

  handleResponse();
};

const getPetVaccineList = async petId => {
  const response = await api.get(`api/pet/getVaccinesByPet?PetId=${petId}&VaccinesName=`);

  if (response.status !== constants.successCode) {
    Alert.alert('', response.data.error, [{ text: 'OK', onPress: () => {} }]);
    return null;
  }

  return response.data;
};

const addPetVaccine = async (request, handleResponse) => {
  const response = await api.post('api/pet/addVaccine', request);

  if (response.status !== constants.successCode) {
    Alert.alert('', response.data.error, [{ text: 'OK', onPress: () => {} }]);
    return;
  }

  handleResponse();
};

const deletePetVAccine = async (petVaccineId, handleResponse) => {
  const response = await api.get(`api/pet/deleteVaccine/${petVaccineId}`);

  if (response.status !== constants.successCode) {
    Alert.alert('', response.data.error, [{ text: 'OK', onPress: () => {} }]);
    return;
  }

  handleResponse();
};

const getDiagnostic = async request => {
  const { petId, symptomIds } = request;
  const response = await api.get(`api/pet/GetDiagnostic?petId=${petId}&symptomIds=${symptomIds}`);

  if (response.status !== constants.successCode) {
    Alert.alert('', response.data.error, [{ text: 'OK', onPress: () => {} }]);
    return null;
  }

  return response.data;
};

export default {
  getPetList,
  getBreedList,
  createPet,
  getPetAlimentationList,
  addPetALimentation,
  deletePetAlimentation,
  getPetVaccineList,
  addPetVaccine,
  deletePetVAccine,
  getDiagnostic,
};
