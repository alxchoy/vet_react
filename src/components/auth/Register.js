import React from 'react';
import PropTypes from 'prop-types';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors, helperStyles } from '../../assets/styles/baseStyle';
import RegisterForm from './forms/RegisterForm';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
  },
  header_container: {
    marginBottom: 40,
  },
  header_title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  header_subtitle: {
    fontSize: 16,
    marginLeft: 20,
  },
  register: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const Register = ({ navigation }) => (
  <View style={styles.register}>
    <View style={helperStyles.m_2_h}>
      <RegisterForm navigation={navigation} />
    </View>
    <View>
      <Image source={require('../../assets/img/pet.png')} />
    </View>
  </View>
);

Register.navigationOptions = {
  header: props => (
    <SafeAreaView style={styles.header}>
      <View style={styles.header_container}>
        <Icon.Button
          backgroundColor={colors.white}
          color="gray"
          name="chevron-left"
          size={20}
          onPress={() => props.navigation.goBack(null)}
        />
        <Text style={styles.header_title}>Regístrate</Text>
      </View>
    </SafeAreaView>
  ),
};

Register.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default Register;
