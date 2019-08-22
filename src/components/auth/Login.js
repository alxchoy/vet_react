import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors, helperStyles } from '../../assets/styles/baseStyle';
import LoginForm from './forms/LoginForm';

const styles = StyleSheet.create({
  header_title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  header_subtitle: {
    fontSize: 18,
  },
  login: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const Login = ({ navigation }) => (
  <View style={styles.login}>
    <View style={[helperStyles.mh_2, helperStyles.mt_2]}>
      <Text style={styles.header_title}>Bienvenido</Text>
      <Text style={styles.header_subtitle}>Regístrate para ingresar</Text>
    </View>
    <View style={helperStyles.mh_2}>
      <LoginForm navigation={navigation} />
    </View>
    <View>
      <Image source={require('../../assets/img/pet.png')} />
    </View>
  </View>
);

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
    },
  };
};

Login.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default Login;
