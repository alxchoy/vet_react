import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import authStyles from './styles';
import { colors } from '../../assets/styles/baseStyle';
import RecoveryForm from '../../components/forms/RecoveryForm';

const PasswordRecovery = () => {
  const { height, width } = Dimensions.get('window');

  return (
    <View style={authStyles.viewAuth}>
      <View style={authStyles.headerContainer}>
        <Text style={authStyles.title}>Recuperar contraseña</Text>
      </View>
      <View style={authStyles.formContainer}>
        <RecoveryForm />
      </View>
      <View style={authStyles.imageContainer}>
        <Image
          source={require('../../assets/img/pet.png')}
          style={{ height: height / 3.6, width }}
        />
      </View>
    </View>
  );
};

PasswordRecovery.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: (
      <View>
        <Icon.Button
          backgroundColor={colors.white}
          color="gray"
          name="chevron-left"
          size={20}
          onPress={() => navigation.goBack(null)}
        />
      </View>
    ),
    headerStyle: {
      borderBottomColor: 'transparent',
    },
  };
};

export default PasswordRecovery;
