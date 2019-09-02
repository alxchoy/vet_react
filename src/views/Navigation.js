import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Bandeja from 'views/pets/Bandeja';
import PetStack from 'views/pets/PetNavigation';

import { colors } from '../assets/styles/baseStyle';

const Profile = () => (
  <View>
    <Text>PERFIL</Text>
  </View>
);
const Services = () => (
  <View>
    <Text>SERVICIOS</Text>
  </View>
);

const Subscription = () => (
  <View>
    <Text>Subscription</Text>
  </View>
);

const OtherStack = createStackNavigator({
  Services,
});

// const Navigation = createBottomTabNavigator(
//   {
//     Pets: {
//       screen: Bandeja,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => <Icon name="paw" color={tintColor} size={25} />,
//       },
//     },
//     Profile: {
//       screen: Profile,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => <Icon name="user" color={tintColor} size={25} />,
//       },
//     },
//     Services: {
//       screen: Services,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => <Icon name="bath" color={tintColor} size={25} />,
//       },
//     },
//     Subscription: {
//       screen: Subscription,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => <Icon name="star" color={tintColor} size={25} />,
//       },
//     },
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: colors.primary,
//       inactiveTintColor: 'grey',
//       labelStyle: {
//         fontSize: 12,
//       },
//     },
//   }
// );

const Navigation = createBottomTabNavigator({
  Pets: PetStack,
  Other: OtherStack,
});

Navigation.navigationOptions = {
  header: null,
};

export default Navigation;