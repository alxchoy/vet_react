import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AppContext } from '../../../context/AppContext';

import authService from '../../../providers/services/authService';
import storageApi from '../../../providers/storage';
import constants from '../../../utils/constants';

import VetInput from '../../shared/VetInput';
import validators from '../../../utils/validators';
import { colors, helperStyles } from '../../../assets/styles/baseStyle';

const styles = StyleSheet.create({
  recovery: {
    alignSelf: 'flex-end',
    color: colors.primary,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
});

const LoginForm = ({ navigation }) => {
  const { appDispatch } = useContext(AppContext);

  async function handleLoginService(response) {
    appDispatch({ type: 'UPDATE_LOADDING', payload: false });
    if (response.status === constants.successCode) {
      await storageApi.storeData('@vet_token', response.data.access_token);
      authService.getId(res => storageApi.storeData('@vet_clientId', res.data.idLogIn));
      navigation.navigate('Navigation');
    } else {
      Alert.alert('', response.data.error, [
        {
          text: 'OK',
          onPress: () => {},
        },
      ]);
    }
  }

  return (
    <Formik
      initialValues={{ userName: '', userPassword: '' }}
      validationSchema={validators.LoginFormValidation}
      onSubmit={values => {
        appDispatch({ type: 'UPDATE_LOADDING', payload: true });
        authService.login(values, handleLoginService);
      }}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => (
        <View>
          <VetInput
            change={handleChange('userName')}
            touched={touched}
            errors={errors}
            placeholder="usuario"
            property="userName"
            value={values.userName}
          />
          <VetInput
            change={handleChange('userPassword')}
            touched={touched}
            errors={errors}
            placeholder="contraseña"
            property="userPassword"
            secureInput
            value={values.userPassword}
          />
          <Text style={styles.recovery} onPress={() => navigation.navigate('Recovery')}>
            Recuperar contraseña
          </Text>
          <TouchableOpacity style={helperStyles.auth_btn} onPress={handleSubmit}>
            <Icon name="arrow-right" size={40} color={colors.white} />
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default LoginForm;
