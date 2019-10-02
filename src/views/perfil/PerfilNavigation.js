import { createStackNavigator } from 'react-navigation';

import PerfilScreen from './Perfil';

const PerfilStack = createStackNavigator(
  {
    Perfil: PerfilScreen,
  },
  {
    mode: 'modal',
  }
);

PerfilStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index < 1,
  };
};

export default PerfilStack;
