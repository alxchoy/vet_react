import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import storageService from 'services/storageService';

import VetResumenProfile from 'components/VetResumenProfile';
import VetAddSearch from 'components/VetAddSearch';
import VetButton from 'components/VetButton';

import { colors } from '../../assets/styles/baseStyle';
import petStyles from './styles';

const Report = ({ navigation }) => {
  const [symptoms, setSymptoms] = React.useState([]);

  const pet = navigation.getParam('pet', null);

  React.useEffect(() => {
    const getDataToSearchList = async () => {
      const list = await storageService.getData('@vet_lookups');
      const listParsed = JSON.parse(list);
      setSymptoms(listParsed.symptoms);
    };

    getDataToSearchList();
  }, []);

  return (
    <View>
      <View style={petStyles.profileContainer}>
        <VetResumenProfile petInfo={pet} />
      </View>
      <View style={petStyles.titleSectionContainer}>
        <Text style={petStyles.titleSection}>Síntomas</Text>
        <VetAddSearch
          btnText="Agregar síntomas"
          navigation={navigation}
          listSearch={symptoms}
          valueSearch="symptomId"
          descriptionSearch="symptomDescription"
          petId={pet.petId}
          type="symptoms"
        />
      </View>
      <View style={petStyles.reportBtnContainer}>
        <VetButton color={colors.alert} onPress={() => {}} text="Reportar" type="block" />
      </View>
    </View>
  );
};

Report.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

Report.navigationOptions = ({ navigation }) => {
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
    title: 'Reportar',
  };
};

export default Report;
