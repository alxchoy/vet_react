import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    elevation: 2,
    marginTop: 40,
    paddingHorizontal: 20,
    paddingVertical: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
});

const RecoveryForm = () => (
  <Formik
    initialValues={{ userName: '', userEmail: '' }}
    validationSchema={validators.LoginFormValidation}
    onSubmit={values => {
      console.log(values);
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
          change={handleChange('userEmail')}
          errors={errors}
          placeholder="email"
          property="userEmail"
          secureInput
          value={values.userEmail}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Icon name="arrow-right" size={40} color={colors.white} />
        </TouchableOpacity>
      </View>
    )}
  </Formik>
);

export default RecoveryForm;
