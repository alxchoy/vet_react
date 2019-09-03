import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import authStyles from './styles';
import { colors } from '../../assets/styles/baseStyle';
import LoginForm from '../../components/forms/LoginForm';

const Login = ({ navigation }) => {
  const { height, width } = Dimensions.get('window');

  return (
    <View style={authStyles.viewAuth}>
      <View style={authStyles.headerContainer}>
        <Text style={authStyles.title}>Bienvenido</Text>
        <Text style={authStyles.subTitle}>Regístrate para ingresar</Text>
      </View>
      <View style={authStyles.formContainer}>
        <LoginForm navigation={navigation} />
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

Login.navigationOptions = ({ navigation }) => {
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
      elevation: 0,
    },
  };
};

Login.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default Login;
