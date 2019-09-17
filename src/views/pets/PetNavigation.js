import { createStackNavigator } from 'react-navigation';

import VetSearchList from 'components/VetSearchList';
import BandejaScreen from './Bandeja';
import PetScreen from './Pet';

const PetMainStack = createStackNavigator({
  Bandeja: BandejaScreen,
  Pet: PetScreen,
});

const PetStack = createStackNavigator(
  {
    Bandeja: BandejaScreen,
    Pet: PetScreen,
    Search: VetSearchList,
  },
  {
    mode: 'modal',
  }
);

PetStack.navigationOptions = ({ navigation }) => {
  console.log(navigation);
  return {
    tabBarVisible: navigation.state.index < 1,
  };
};

export default PetStack;
