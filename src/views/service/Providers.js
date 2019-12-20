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

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

const Providers = ({ navigation }) => {
  const providers = navigation.getParam('providers', null);

  return (
    <View style={styles.container}>
      <ScrollView>
        <VetProvidersList navigation={navigation} data={providers} />
      </ScrollView>
    </View>
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
    title: 'Proveedores',
  };
};

export default Providers;
