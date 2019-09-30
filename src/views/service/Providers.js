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

// const styles = StyleSheet.create({
//   titleProviders: {
//     fontSize: 18,
//   },
//   titleProvidersContainer: {
//     marginHorizontal: 20,
//     borderBottomColor: colors.gray,
//     borderBottomWidth: 1,
//     paddingBottom: 10,
//   },
// });

const Providers = ({ navigation }) => {
  // const [items, setItems] = React.useState([]);
  // const { appDispatch } = React.useContext(AppContext);
  // const symptoms = navigation.getParam('symptomsSelected', []);
  const providers = navigation.getParam('providers', null);

  console.log(providers);

  // React.useEffect(() => {
  //   const fetch = async () => {
  //     appDispatch({ type: 'UPDATE_LOADDING', payload: true });
  //     const diagnostics = await petService.getDiagnostic({
  //       petId,
  //       symptomIds: symptoms.map(symptom => symptom.symptomId).join(),
  //     });
  //     setItems(diagnostics);
  //     appDispatch({ type: 'UPDATE_LOADDING', payload: false });
  //   };

  //   fetch();
  // }, [appDispatch, petId, symptoms]);

  return (
    <Text>
      <ScrollView>
        <Text>
          <Text>
            <Text>Puede atenderlo</Text>
          </Text>
          {/* <VetProvidersList navigation={navigation} data={items.providers} /> */}
        </Text>
      </ScrollView>
      {/* <View style={petStyles.petFooter}>
        <VetButton
          color={colors.primary}
          onPress={() => navigation.navigate('Map', { data: items.providers })}
          text="Ver mapa"
          type="block"
        />
      </View> */}
    </Text>
  );
};

Providers.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

Providers.navigationOptions = ({ navigation }) => {
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

export default Providers;
