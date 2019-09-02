import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';

import VetInput from '../VetInput';
import validators from '../../utils/validators';
import { colors, helperStyles } from '../../assets/styles/baseStyle';

const RecoveryForm = () => (
  <Formik
    initialValues={{ userName: '', userEmail: '' }}
    validationSchema={validators.RecoveryFormValidation}
    onSubmit={values => {
      console.log(values);
    }}
  >
    {({ values, handleChange, handleSubmit, errors, touched }) => (
      <View>
        <VetInput
          change={handleChange('userName')}
          errors={errors}
          placeholder="usuario"
          property="userName"
          touched={touched}
          value={values.userName}
        />
        <VetInput
          change={handleChange('userEmail')}
          errors={errors}
          placeholder="email"
          property="userEmail"
          touched={touched}
          value={values.userEmail}
        />
        <TouchableOpacity style={helperStyles.auth_btn} onPress={handleSubmit}>
          <Icon name="arrow-right" size={40} color={colors.white} />
        </TouchableOpacity>
      </View>
    )}
  </Formik>
);

export default RecoveryForm;
