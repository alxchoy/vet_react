import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import petService from 'services/petService';

import VetItemsList from 'components/VetItemsList';
import VetProvidersList from 'components/VetProvidersList';
import VetButton from 'components/VetButton';
import { AppContext } from '../../providers/AppContext';

import { colors } from '../../assets/styles/baseStyle';
import petStyles from './styles';

const styles = StyleSheet.create({
  titleProviders: {
    fontSize: 18,
  },
  titleProvidersContainer: {
    marginHorizontal: 20,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
});

const Results = ({ navigation }) => {
  const [items, setItems] = React.useState([]);
  const { appDispatch } = React.useContext(AppContext);
  const symptoms = navigation.getParam('symptomsSelected', []);
  const petId = navigation.getParam('petId', null);

  React.useEffect(() => {
    const fetch = async () => {
      appDispatch({ type: 'UPDATE_LOADDING', payload: true });
      const diagnostics = await petService.getDiagnostic({
        petId,
        symptomIds: symptoms.map(symptom => symptom.symptomId).join(),
      });
      setItems(diagnostics);
      appDispatch({ type: 'UPDATE_LOADDING', payload: false });
    };

    fetch();
  }, [appDispatch, petId, symptoms]);

  return (
    <View style={petStyles.petContainer}>
      <ScrollView>
        <VetItemsList data={items.diseases} propertyItem="diseaseName" valueItem="diseaseId" />
        <View>
          <View style={styles.titleProvidersContainer}>
            <Text style={styles.titleProviders}>Puede atenderlo</Text>
          </View>
          <VetProvidersList navigation={navigation} data={items.providers} />
        </View>
      </ScrollView>
      <View style={petStyles.petFooter}>
        <VetButton
          color={colors.primary}
          onPress={() => navigation.navigate('Map', { data: items.providers })}
          text="Ver mapa"
          type="block"
        />
      </View>
    </View>
  );
};

Results.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

Results.navigationOptions = ({ navigation }) => {
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
    title: 'Posibles enfermedades',
  };
};

export default Results;
