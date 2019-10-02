import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Alert, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';

import { AppContext } from 'providers/AppContext';
import authService from 'services/authService';
import VetInput from 'components/VetInput';
import VetButton from 'components/VetButton';
import validators from '../../utils/validators';
import { colors, helperStyles } from '../../assets/styles/baseStyle';

const PerfilForm = ({ navigation }) => {
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
        // clientId: ,
        clientFullName: '',
        clientDocumentNumber: '',
        clientDocumentTypeId: '',
        clientEmail: '',
        userName: '',
        userPassword: '',
        userNewPassword: '',
        userNewPasswordConfirm: '',
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
            change={handleChange('clientFullName')}
            errors={errors}
            placeholder="nombre"
            property="clientFullName"
            touched={touched}
            value={values.clientFullName}
          />
          <VetInput
            change={handleChange('clientDocumentNumber')}
            errors={errors}
            placeholder="número documento"
            property="clientDocumentNumber"
            touched={touched}
            value={values.clientDocumentNumber}
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
            change={handleChange('userName')}
            errors={errors}
            placeholder="usuario"
            property="userName"
            secureInput
            touched={touched}
            value={values.userName}
          />
          <VetInput
            change={handleChange('userPassword')}
            errors={errors}
            placeholder="contraseña actual"
            property="userPassword"
            secureInput
            touched={touched}
            value={values.userPassword}
          />
          <VetInput
            change={handleChange('userNewPassword')}
            errors={errors}
            placeholder="nueva contraseña"
            property="userNewPassword"
            secureInput
            touched={touched}
            value={values.userNewPassword}
          />
          <VetInput
            change={handleChange('userNewPasswordConfirm')}
            errors={errors}
            placeholder="repetir contraseña"
            property="userNewPasswordConfirm"
            secureInput
            touched={touched}
            value={values.userNewPasswordConfirm}
          />
          <VetButton color={colors.primary} onPress={() => {}} text="Guardar" type="block" />
        </View>
      )}
    </Formik>
  );
};

PerfilForm.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default PerfilForm;
