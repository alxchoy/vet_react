import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import PetStack from 'views/pets/PetNavigation';
import ServiceStack from 'views/service/ServiceNavigation';
import PerfilStack from 'views/perfil/PerfilNavigation';

import { colors } from '../assets/styles/baseStyle';

const Navigation = createBottomTabNavigator(
  {
    'Mis mascotas': PetStack,
    Servicios: ServiceStack,
    Perfil: PerfilStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'Mis mascotas') {
          iconName = 'paw';
        } else if (routeName === 'Perfil') {
          iconName = 'user';
        } else if (routeName === 'Servicios') {
          iconName = 'bath';
        }

        return <Icon name={iconName} color={tintColor} size={25} />;
      },
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
