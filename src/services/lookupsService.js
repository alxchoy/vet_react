import axios from 'axios';

import api from './apiService';
import storageService from './storageService';

const getDocumentTypes = () => api.get('api/lookup/client/documentType');
const getSex = () => api.get('api/lookup/pet/sex');
const getEnviroment = () => api.get('api/lookup/pet/enviroment');
const getSizes = () => api.get('api/lookup/pet/sizes');
const getSpecies = () => api.get('api/maintenance/species/search?filter');
const getAlimentations = () => api.get('api/maintenance/alimentation');
const getVaccines = () => api.get('api/maintenance/vaccine');
const getSymptoms = () => api.get('api/maintenance/symptom');

export const getLookups = async () => {
  const lookups = await axios.all([
    getDocumentTypes(),
    getSex(),
    getEnviroment(),
    getSizes(),
    getSpecies(),
    getAlimentations(),
    getVaccines(),
    getSymptoms(),
  ]);

  const response = {
    aliments: lookups[5].data,
    documents: lookups[0].data,
    habitat: lookups[2].data,
    sex: lookups[1].data,
    size: lookups[3].data,
    species: lookups[4].data,
    symptoms: lookups[7].data,
    vaccines: lookups[6].data,
  };

  console.log(response);

  await storageService.storeData('@vet_lookups', JSON.stringify(response));
};
