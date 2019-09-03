import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import BandejaScreen from './Bandeja';

const PetStack = createStackNavigator({
  Bandeja: BandejaScreen,
});

export default PetStack;
