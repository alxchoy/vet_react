/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import NavigationScreen from 'components/Navigation';
import HomeScreen from 'components/Home';
import LoginScreen from 'components/auth/Login';
import RecoveryScreen from 'components/auth/PasswordRecovery';
import RegisterScreen from 'components/auth/Register';

import { AppContextProvider } from './context/AppContext';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Recovery: RecoveryScreen,
    Register: RegisterScreen,
    Navigation: NavigationScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <AppContextProvider>
    <AppContainer />
  </AppContextProvider>
);

export default App;
