import AsyncStorage from '@react-native-community/async-storage';

const storeData = (key, value) => AsyncStorage.setItem(key, value);
const getData = key => AsyncStorage.getItem(key);

const storageService = {
  storeData,
  getData,
};

export default storageService;
