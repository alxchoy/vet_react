/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import NavigationScreen from 'views/Navigation';
import HomeScreen from 'views/Home';
import LoginScreen from 'views/auth/Login';
import RecoveryScreen from 'views/auth/PasswordRecovery';
import RegisterScreen from 'views/auth/Register';
import ClinicScreen from 'views/clinic/Clinic';
import MapScreen from 'components/VetMap';

import { AppContextProvider } from 'providers/AppContext';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Recovery: RecoveryScreen,
    Register: RegisterScreen,
    Clinic: ClinicScreen,
    Map: MapScreen,
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
