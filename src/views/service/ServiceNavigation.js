import { createStackNavigator } from 'react-navigation';

import VetSearchList from 'components/VetSearchList';
import ServiceScreen from './Services';
import ProviderScreen from './Providers';

const ServiceStack = createStackNavigator(
  {
    Service: ServiceScreen,
    Provider: ProviderScreen,
    Search: VetSearchList,
  },
  {
    mode: 'modal',
  }
);

ServiceStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index < 1,
  };
};

export default ServiceStack;
