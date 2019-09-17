import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';

import VetInput from 'components/VetInput';
import VetSelect from 'components/VetSelect';
import VetDate from 'components/VetDate';
import VetButton from 'components/VetButton';

import validators from '../../utils/validators';
import { colors, helperStyles } from '../../assets/styles/baseStyle';

const PetForm = () => {
  return (
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
        // appDispatch({ type: 'UPDATE_LOADDING', payload: true });
        // authService.login(values, handleLoginService);
        console.log(values);
      }}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => (
        <View>
          <VetInput
            change={handleChange('petName')}
            errors={errors}
            icon="paw"
            placeholder="nombre"
            property="petName"
            touched={touched}
            value={values.petName}
          />
          <VetDate change={handleChange('petBirthDate')} icon="calendar" />
          <VetSelect
            change={handleChange('petSpecie')}
            icon="paw"
            lookupName="species"
            lookupPropertyName="specieName"
            lookupPropertyValue="specieId"
          />
          <VetSelect
            change={handleChange('petBreed')}
            dependingValue={values.petSpecie}
            icon="paw"
            lookupName="breed"
            lookupPropertyName="raceName"
            lookupPropertyValue="raceId"
          />
          <VetSelect
            change={handleChange('petSex')}
            icon="venus-mars"
            lookupName="sex"
            lookupPropertyName="description"
            lookupPropertyValue="id"
          />
          <VetInput
            change={handleChange('petSize')}
            errors={errors}
            icon="balance-scale"
            placeholder="tamaño"
            property="petSize"
            touched={touched}
            value={values.petSize}
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
            icon="compass"
            lookupName="habitat"
            lookupPropertyName="description"
            lookupPropertyValue="id"
          />

          <View
            style={{ backgroundColor: colors.gray, padding: 20, position: 'absolute', bottom: 100 }}
          >
            <VetButton
              color={colors.primary}
              onPress={handleSubmit}
              text="Agregar mascota"
              type="block"
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default PetForm;
