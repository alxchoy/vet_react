import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors, helperStyles } from '../../assets/styles/baseStyle';
import RegisterForm from './forms/RegisterForm';

const styles = StyleSheet.create({
  header_title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  register: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const Register = ({ navigation }) => (
  <View style={styles.register}>
    <View style={[helperStyles.mh_2, helperStyles.mt_2]}>
      <Text style={styles.header_title}>Regístrate</Text>
    </View>
    <View style={helperStyles.m_2_h}>
      <RegisterForm navigation={navigation} />
    </View>
    <View>
      <Image source={require('../../assets/img/pet.png')} />
    </View>
  </View>
);

Register.navigationOptions = ({ navigation }) => {
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

Register.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default Register;
