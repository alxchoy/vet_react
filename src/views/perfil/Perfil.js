import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';

import authService from 'services/authService';

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
  headerProfile: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconProfile: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
  },
  greetingTxt: {
    fontSize: 18,
  },
  nameTxt: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  btnContainer: {
    marginTop: 20,
    paddingBottom: 50,
    marginBottom: 200,
  },
});

const Register = ({ navigation }) => {
  const [profile, setProfile] = useState({});
  const { height, width } = Dimensions.get('window');
  const { appDispatch } = React.useContext(AppContext);

  React.useEffect(() => {
    const fetch = async () => {
      appDispatch({ type: 'UPDATE_LOADDING', payload: true });
      const data = await authService.getClient();
      appDispatch({ type: 'UPDATE_LOADDING', payload: false });
      setProfile(data);
    };

    fetch();
  }, [appDispatch]);

  return (
    <View>
      <View style={styles.headerProfile}>
        <Icon name="user" size={50} color="grey" style={styles.iconProfile} />
        <View>
          <Text style={styles.greetingTxt}>Hola</Text>
          <Text style={styles.nameTxt}>{profile.userName}</Text>
        </View>
      </View>
      {Object.keys(profile).length > 1 && (
        <Formik
          initialValues={{
            clientFullName: profile ? profile.clientFullName : '',
            clientDocumentNumber: profile ? profile.clientDocumentNumber : '',
            clientDocumentTypeId: profile ? profile.clientDocumentTypeId : null,
            clientEmail: profile ? profile.clientEmail : '',
            userName: profile ? profile.userName : '',
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
              <ScrollView scrollEnabled="true">
                <View style={styles.form}>
                  <VetInput
                    change={handleChange('clientFullName')}
                    errors={errors}
                    placeholder="nombre"
                    property="clientFullName"
                    touched={touched}
                    value={values.clientFullName}
                  />
                  <VetSelect
                    change={handleChange('clientDocumentTypeId')}
                    errors={errors}
                    lookupName="documents"
                    lookupPropertyName="description"
                    lookupPropertyValue="id"
                    property="clientDocumentTypeId"
                    touched={touched}
                    value={values.clientDocumentTypeId}
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
                  <View style={styles.btnContainer}>
                    <VetButton
                      color={colors.primary}
                      onPress={handleSubmit}
                      text="Guardar"
                      type="block"
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
          )}
        </Formik>
      )}
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
