import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors, helperStyles } from '../../assets/styles/baseStyle';
import RecoveryForm from './forms/RecoveryForm';

const styles = StyleSheet.create({
  header_title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  recover: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const PasswordRecovery = () => (
  <View style={styles.recover}>
    <View style={[helperStyles.mh_2, helperStyles.mt_2]}>
      <Text style={styles.header_title}>Recuperar contraseña</Text>
    </View>
    <View style={helperStyles.mh_2}>
      <RecoveryForm />
    </View>
    <View>
      <Image source={require('../../assets/img/pet.png')} />
    </View>
  </View>
);

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
