import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';

import PerfilForm from 'components/forms/PerfilForm';
import VetButton from 'components/VetButton';
import VetInput from 'components/VetInput';
import VetSelect from 'components/VetSelect';
import { AppContext } from '../../providers/AppContext';

import validators from '../../utils/validators';
import { colors } from '../../assets/styles/baseStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    paddingHorizontal: 20,
  },
  footer: {
    backgroundColor: colors.gray,
    padding: 20,
    marginTop: 10,
  },
});

const Register = ({ navigation }) => {
  const [enableScroll, setEnableScroll] = useState(false);
  const { height, width } = Dimensions.get('window');
  const { appDispatch } = React.useContext(AppContext);

  function onContentSizeChange(contentWidth, contentHeight) {
    setEnableScroll(contentHeight > height);
  }

  return (
    <View>
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
            <ScrollView onContentSizeChange={onContentSizeChange} scrollEnabled={enableScroll}>
              <View style={styles.form}>
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
              </View>
            </ScrollView>
            <View style={styles.footer}>
              <VetButton color={colors.primary} onPress={() => {}} text="Guardar" type="block" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

Register.navigationOptions = ({ navigation }) => {
  return {
    headerStyle: {
      borderBottomColor: 'transparent',
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white',
    },
    title: 'Mi perfil',
  };
};

Register.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default Register;
