import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Alert, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AppContext } from 'providers/AppContext';
import authService from 'services/authService';
import VetInput from 'components/VetInput';
import validators from '../../utils/validators';
import { colors, helperStyles } from '../../assets/styles/baseStyle';

const RegisterForm = ({ navigation }) => {
  const { appDispatch } = useContext(AppContext);

  function handleRegisterService(res) {
    Alert.alert('', res.data.response, [
      { text: 'OK', onPress: () => navigation.navigate('Login') },
    ]);
    appDispatch({ type: 'UPDATE_LOADDING', payload: false });
  }

  return (
    <Formik
      initialValues={{
        name: '',
        userName: '',
        clientEmail: '',
        userPassword: '',
        userPasswordConfirm: '',
      }}
      validationSchema={validators.RegisterFormValidation}
      onSubmit={values => {
        appDispatch({ type: 'UPDATE_LOADDING', payload: true });
        authService.createClient(values, handleRegisterService);
      }}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => (
        <View>
          <VetInput
            change={handleChange('name')}
            errors={errors}
            placeholder="nombre"
            property="name"
            touched={touched}
            value={values.name}
          />
          <VetInput
            change={handleChange('userName')}
            errors={errors}
            placeholder="usuario"
            property="userName"
            touched={touched}
            value={values.userName}
          />
          <VetInput
            change={handleChange('clientEmail')}
            errors={errors}
            placeholder="correo"
            property="clientEmail"
            touched={touched}
            value={values.clientEmail}
          />
          <VetInput
            change={handleChange('userPassword')}
            errors={errors}
            placeholder="contraseña"
            property="userPassword"
            secureInput
            touched={touched}
            value={values.userPassword}
          />
          <VetInput
            change={handleChange('userPasswordConfirm')}
            errors={errors}
            placeholder="confirmar contraseña"
            property="userPasswordConfirm"
            secureInput
            touched={touched}
            value={values.userPasswordConfirm}
          />
          <TouchableOpacity style={helperStyles.auth_btn} onPress={handleSubmit}>
            <Icon name="arrow-right" size={40} color={colors.white} />
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

RegisterForm.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default RegisterForm;
