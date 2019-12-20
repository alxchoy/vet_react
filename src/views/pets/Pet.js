import React from 'react';
import PropTypes from 'prop-types';
import { Alert, ScrollView, Text, View } from 'react-native';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';

import petService from 'services/petService';
import storageService from 'services/storageService';

import VetResumenProfile from 'components/VetResumenProfile';
import VetButton from 'components/VetButton';
import VetInput from 'components/VetInput';
import VetSelect from 'components/VetSelect';
import VetDate from 'components/VetDate';
import VetAddSearch from 'components/VetAddSearch';
import { AppContext } from '../../providers/AppContext';

import validators from '../../utils/validators';
import { colors } from '../../assets/styles/baseStyle';
import petStyles from './styles';

const Pet = ({ navigation }) => {
  const [alimentations, setAlimentations] = React.useState([]);
  const [vaccines, setVaccines] = React.useState([]);

  const pet = navigation.getParam('pet', null);
  console.log(pet);
  const { appDispatch } = React.useContext(AppContext);

  React.useEffect(() => {
    const getDataToSearchList = async () => {
      const list = await storageService.getData('@vet_lookups');
      const listParsed = JSON.parse(list);
      setAlimentations(listParsed.aliments);
      setVaccines(listParsed.vaccines);
    };

    getDataToSearchList();
  }, []);

  return (
    <View style={petStyles.petContainer}>
      <Formik
        initialValues={{
          petName: pet ? pet.petName : '',
          petBirthDay: pet ? pet.petBirthDay : '',
          specieId: pet ? pet.specieId : null,
          raceId: pet ? pet.raceId : null,
          sexId: pet ? pet.sexId : null,
          petSizeId: pet ? pet.petSizeId : null,
          petWeight: pet ? `${pet.petWeight}` : '',
          habitadId: pet ? pet.habitadId : null,
        }}
        validationSchema={validators.PetFormValidation}
        onSubmit={values => {
          if (pet) {
            navigation.navigate('Report', { pet });
            return;
          }

          appDispatch({ type: 'UPDATE_LOADDING', payload: true });
          petService.createPet(values, () => {
            Alert.alert('', 'La mascota fue registrada correctamente', [
              {
                text: 'OK',
                onPress: () => {
                  appDispatch({ type: 'UPDATE_LOADDING', payload: false });
                  navigation.navigate('Bandeja');
                },
              },
            ]);
          });
        }}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <View style={petStyles.petContainer}>
            <ScrollView>
              <View style={petStyles.profileContainer}>
                <VetResumenProfile petInfo={pet} />
              </View>
              <View style={petStyles.titleSectionContainer}>
                <Text style={petStyles.titleSection}>General</Text>
                <VetInput
                  change={handleChange('petName')}
                  errors={errors}
                  icon="paw"
                  placeholder="nombre"
                  property="petName"
                  touched={touched}
                  value={values.petName}
                />
                <VetDate
                  change={handleChange('petBirthDay')}
                  icon="calendar"
                  errors={errors}
                  property="petBirthDay"
                  touched={touched}
                  value={values.petBirthDay}
                />
                <VetSelect
                  change={handleChange('specieId')}
                  errors={errors}
                  icon="paw"
                  lookupName="species"
                  lookupPropertyName="specieName"
                  lookupPropertyValue="specieId"
                  property="specieId"
                  touched={touched}
                  value={values.specieId}
                />
                <VetSelect
                  change={handleChange('raceId')}
                  dependingValue={values.specieId}
                  errors={errors}
                  icon="paw"
                  lookupName="breed"
                  lookupPropertyName="raceName"
                  lookupPropertyValue="raceId"
                  property="raceId"
                  touched={touched}
                  value={values.raceId}
                />
                <VetSelect
                  change={handleChange('sexId')}
                  errors={errors}
                  icon="venus-mars"
                  lookupName="sex"
                  lookupPropertyName="description"
                  lookupPropertyValue="id"
                  property="sexId"
                  touched={touched}
                  value={values.sexId}
                />
                <VetSelect
                  change={handleChange('petSizeId')}
                  errors={errors}
                  icon="paw"
                  lookupName="size"
                  lookupPropertyName="description"
                  lookupPropertyValue="id"
                  property="petSizeId"
                  touched={touched}
                  value={values.petSizeId}
                />
                <VetInput
                  change={handleChange('petWeight')}
                  errors={errors}
                  icon="balance-scale"
                  placeholder="peso"
                  property="petWeight"
                  touched={touched}
                  value={values.petWeight}
                />
                <VetSelect
                  change={handleChange('habitadId')}
                  errors={errors}
                  icon="compass"
                  lookupName="habitat"
                  lookupPropertyName="description"
                  lookupPropertyValue="id"
                  property="habitadId"
                  touched={touched}
                  value={values.habitadId}
                />
              </View>
              {pet && (
                <View style={petStyles.titleSectionContainer}>
                  <Text style={petStyles.titleSection}>Alimentación</Text>
                  <VetAddSearch
                    btnText="Agregar alimentos"
                    navigation={navigation}
                    listSearch={alimentations}
                    valueSearch="alimentationId"
                    descriptionSearch="alimentationName"
                    petId={pet.petId}
                    type="aliments"
                  />
                </View>
              )}
              {pet && (
                <View style={petStyles.titleSectionContainer}>
                  <Text style={petStyles.titleSection}>Vacunas</Text>
                  <VetAddSearch
                    btnText="Agregar vacunas"
                    navigation={navigation}
                    listSearch={vaccines}
                    valueSearch="vaccineId"
                    descriptionSearch="vaccineName"
                    petId={pet.petId}
                    type="vaccines"
                  />
                </View>
              )}
            </ScrollView>
            <View style={petStyles.petFooter}>
              <VetButton
                color={pet ? colors.alert : colors.primary}
                onPress={() => {
                  if (pet) {
                    navigation.navigate('Report', { pet });
                  } else {
                    handleSubmit(values);
                  }
                }}
                text={pet ? 'Reportar enfermedad' : 'Agregar mascota'}
                type="block"
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

Pet.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

Pet.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: (
      <View>
        <Icon.Button
          backgroundColor={colors.primary}
          color="white"
          name="chevron-left"
          size={20}
          onPress={() => navigation.goBack(null)}
        />
      </View>
    ),
    headerStyle: {
      borderBottomColor: 'transparent',
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white',
    },
    title: 'Mis mascotas',
  };
};

export default Pet;
