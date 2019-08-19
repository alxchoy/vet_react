import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';

import VetInput from '../../shared/VetInput';
import validators from '../../../utils/validators';
import { colors } from '../../../assets/styles/baseStyle';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
    borderRadius: 200,
    marginTop: 20,
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

const RegisterForm = ({ navigation }) => (
  <Formik
    initialValues={{
      name: '',
      userName: '',
      userEmail: '',
      userPassword: '',
      userPasswordConfirm: '',
    }}
    validationSchema={validators.LoginFormValidation}
    onSubmit={values => {
      console.log(values);
    }}
  >
    {({ values, handleChange, handleSubmit, errors }) => (
      <View>
        <VetInput
          change={handleChange('name')}
          errors={errors}
          placeholder="nombre"
          property="name"
          value={values.name}
        />
        <VetInput
          change={handleChange('userName')}
          errors={errors}
          placeholder="usuario"
          property="userName"
          secureInput
          value={values.userName}
        />
        <VetInput
          change={handleChange('userEmail')}
          errors={errors}
          placeholder="correo"
          property="userEmail"
          secureInput
          value={values.userEmail}
        />
        <VetInput
          change={handleChange('userPassword')}
          errors={errors}
          placeholder="contraseña"
          property="userPassword"
          secureInput
          value={values.userPassword}
        />
        <VetInput
          change={handleChange('userPasswordConfirm')}
          errors={errors}
          placeholder="confirmar contraseña"
          property="userPasswordConfirm"
          secureInput
          value={values.userPasswordConfirm}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Icon name="arrow-right" size={40} color={colors.white} />
        </TouchableOpacity>
      </View>
    )}
  </Formik>
);

RegisterForm.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default RegisterForm;
