import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import PetStack from 'views/pets/PetNavigation';
import { colors } from '../assets/styles/baseStyle';

const Services = () => (
  <View>
    <Text>SERVICIOS</Text>
  </View>
);

const OtherStack = createStackNavigator({
  Services,
});

const Navigation = createBottomTabNavigator(
  {
    Pets: PetStack,
    Other: OtherStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'Pets') {
          iconName = 'paw';
        } else if (routeName === 'Other') {
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
