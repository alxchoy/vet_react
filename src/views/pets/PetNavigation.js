import React from 'react';
import { createStackNavigator } from 'react-navigation';

import BandejaScreen from './Bandeja';

const PetStack = createStackNavigator({
  Bandeja: BandejaScreen,
});

export default PetStack;
