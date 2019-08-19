/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './components/Home';
import LoginScreen from './components/auth/Login';
import RecoveryScreen from './components/auth/PasswordRecovery';
import RegisterScreen from './components/auth/Register';

const AppNavigator = createStackNavigator(
  { Home: HomeScreen, Login: LoginScreen, Recovery: RecoveryScreen, Register: RegisterScreen },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
