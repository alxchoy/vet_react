import { createStackNavigator } from 'react-navigation';

import VetSearchList from 'components/VetSearchList';
import BandejaScreen from './Bandeja';
import PetScreen from './Pet';
import ReportScreen from './Report';
import ResultScreen from './Results';

const PetMainStack = createStackNavigator({
  Bandeja: BandejaScreen,
  Pet: PetScreen,
});

const PetStack = createStackNavigator(
  {
    Bandeja: BandejaScreen,
    Pet: PetScreen,
    Report: ReportScreen,
    Result: ResultScreen,
    Search: VetSearchList,
  },
  {
    mode: 'modal',
  }
);

PetStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index < 1,
  };
};

export default PetStack;
