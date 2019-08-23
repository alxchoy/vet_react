import AsyncStorage from '@react-native-community/async-storage';

const storeData = (key, value) => {
  AsyncStorage.setItem(key, value)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

const getData = key => {
  AsyncStorage.setItem(key)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

const storageApi = {
  storeData,
  getData,
};

export default storageApi;
