import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AppContext } from '../../../context/AppContext';

import authService from '../../../providers/services/authService';
import storageApi from '../../../providers/storage';
import constants from '../../../utils/constants';

import VetInput from '../../shared/VetInput';
import validators from '../../../utils/validators';
import { colors } from '../../../assets/styles/baseStyle';

const styles = StyleSheet.create({
  recovery: {
    alignSelf: 'flex-end',
    color: colors.primary,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
    borderRadius: 200,
    paddingHorizontal: 20,
    paddingVertical: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 2,
  },
});

const LoginForm = ({ navigation }) => {
  const { appDispatch } = useContext(AppContext);

  function handleLoginService(response) {
    console.log(response);
    appDispatch({ type: 'UPDATE_LOADDING', payload: false });
    if (response.status === constants.successCode) {
      storageApi.storeData('@vet_token', response.data.access_token);
      // navigation.navigate('Recovery');
    } else {
      console.log('Error de contraseña');
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
      {({ values, handleChange, handleSubmit, errors }) => (
        <View>
          <VetInput
            change={handleChange('userName')}
            errors={errors}
            placeholder="usuario"
            property="userName"
            value={values.userName}
          />
          <VetInput
            change={handleChange('userPassword')}
            errors={errors}
            placeholder="contraseña"
            property="userPassword"
            secureInput
            value={values.userPassword}
          />
          <Text style={styles.recovery} onPress={() => navigation.navigate('Recovery')}>
            Recuperar contraseña
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
