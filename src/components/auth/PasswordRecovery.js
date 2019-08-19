import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors, helperStyles } from '../../assets/styles/baseStyle';
import RecoveryForm from './forms/RecoveryForm';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
  },
  header_container: {
    marginBottom: 60,
  },
  header_btn: {
    alignSelf: 'flex-start',
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
  recover: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const PasswordRecovery = () => (
  <View style={styles.recover}>
    <View style={helperStyles.m_2_h}>
      <RecoveryForm />
    </View>
    <View>
      <Image source={require('../../assets/img/pet.png')} />
    </View>
  </View>
);

PasswordRecovery.navigationOptions = {
  header: props => (
    <SafeAreaView style={styles.header}>
      <View style={styles.header_container}>
        <View style={styles.header_btn}>
          <Icon.Button
            backgroundColor={colors.white}
            color="gray"
            name="chevron-left"
            size={20}
            onPress={() => props.navigation.goBack(null)}
          />
        </View>
        <Text style={styles.header_title}>Recuperar contraseña</Text>
      </View>
    </SafeAreaView>
  ),
};

export default PasswordRecovery;
