import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';

import VetInput from 'components/VetInput';
import VetSelect from 'components/VetSelect';
import { AppContext } from '../../providers/AppContext';

import authService from '../../services/authService';

import validators from '../../utils/validators';
import { colors, helperStyles } from '../../assets/styles/baseStyle';

const PetForm = () => {
  return (
    <Formik
      initialValues={{
        petName: '',
        petBirthDate: '',
        petSpecie: '',
        petRace: '',
        petSex: '',
        petSize: '',
        petWeight: '',
        petHabitad: '',
      }}
      // validationSchema={validators.LoginFormValidation}
      onSubmit={values => {
        // appDispatch({ type: 'UPDATE_LOADDING', payload: true });
        // authService.login(values, handleLoginService);
        console.log(values);
      }}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => (
        <View>
          <VetInput
            change={handleChange('petName')}
            touched={touched}
            errors={errors}
            placeholder="usuario"
            property="petName"
            value={values.userName}
          />
          <VetInput
            change={handleChange('userPassword')}
            touched={touched}
            errors={errors}
            placeholder="contraseña"
            property="userPassword"
            value={values.userPassword}
          />
          <VetSelect change={handleChange('petSpecie')} />

          <TouchableOpacity style={helperStyles.auth_btn} onPress={handleSubmit}>
            <Icon name="arrow-right" size={40} color={colors.white} />
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default PetForm;
