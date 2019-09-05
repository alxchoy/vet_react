import { createStackNavigator } from 'react-navigation';

import BandejaScreen from './Bandeja';
import PetScreen from './Pet';

const PetStack = createStackNavigator({
  Bandeja: BandejaScreen,
  Pet: PetScreen,
});

export default PetStack;
