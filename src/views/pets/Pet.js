import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
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
          petName: '',
          petBirthDate: '',
          petSpecie: '',
          petBreed: '',
          petSex: '',
          petSize: '',
          petWeight: '',
          petHabitat: '',
        }}
        validationSchema={validators.PetFormValidation}
        onSubmit={values => {
          if (pet) {
            navigation.navigate('Report', { pet });
            return null;
          }

          appDispatch({ type: 'UPDATE_LOADDING', payload: true });
          petService.createPet(values, () => {
            appDispatch({ type: 'UPDATE_LOADDING', payload: false });
            navigation.navigate('Bandeja', {
              isReload: true,
            });
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
                  change={handleChange('petBirthDate')}
                  icon="calendar"
                  errors={errors}
                  property="petBirthDate"
                  touched={touched}
                />
                <VetSelect
                  change={handleChange('petSpecie')}
                  errors={errors}
                  icon="paw"
                  lookupName="species"
                  lookupPropertyName="specieName"
                  lookupPropertyValue="specieId"
                  property="petSpecie"
                  touched={touched}
                />
                <VetSelect
                  change={handleChange('petBreed')}
                  dependingValue={values.petSpecie}
                  errors={errors}
                  icon="paw"
                  lookupName="breed"
                  lookupPropertyName="raceName"
                  lookupPropertyValue="raceId"
                  property="petBreed"
                  touched={touched}
                />
                <VetSelect
                  change={handleChange('petSex')}
                  errors={errors}
                  icon="venus-mars"
                  lookupName="sex"
                  lookupPropertyName="description"
                  lookupPropertyValue="id"
                  property="petSex"
                  touched={touched}
                />
                <VetSelect
                  change={handleChange('petSize')}
                  errors={errors}
                  icon="paw"
                  lookupName="size"
                  lookupPropertyName="description"
                  lookupPropertyValue="id"
                  property="petSize"
                  touched={touched}
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
                  change={handleChange('petHabitat')}
                  errors={errors}
                  icon="compass"
                  lookupName="habitat"
                  lookupPropertyName="description"
                  lookupPropertyValue="id"
                  property="petHabitat"
                  touched={touched}
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
                onPress={() => navigation.navigate('Report', { pet })}
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
