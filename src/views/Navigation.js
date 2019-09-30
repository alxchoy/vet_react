import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import PetStack from 'views/pets/PetNavigation';
import ServiceStack from 'views/service/ServiceNavigation';

import ServiceScreen from 'views/service/Services';

import VetSearchList from 'components/VetSearchList';

import { colors } from '../assets/styles/baseStyle';

const Navigation = createBottomTabNavigator(
  {
    'Mis mascotas': PetStack,
    Servicios: ServiceStack,
    // 'Mi perfil': {
    //   screen: ServiceScreen,
    //   navigationOptions: {
    //     title: 'Mi perfil',
    //   },
    // },
    // Servicios: {
    //   screen: ServiceScreen,
    //   navigationOptions: {
    //     title: 'Servicios',
    //   },
    // },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'Mis mascotas') {
          iconName = 'paw';
        } else if (routeName === 'Mi perfil') {
          iconName = 'user';
        } else if (routeName === 'Servicios') {
          iconName = 'bath';
        }

        return <Icon name={iconName} color={tintColor} size={25} />;
      },
      // tabBarVisible: false,
    }),
    tabBarOptions: {
      activeTintColor: colors.primary,
      labelStyle: {
        fontSize: 12,
      },
    },
  }
);

Navigation.navigationOptions = {
  header: null,
};

export default Navigation;
