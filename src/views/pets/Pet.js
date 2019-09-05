import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import VetResumenProfile from 'components/VetResumenProfile';
import PetForm from 'components/forms/PetForm';
import { colors } from '../../assets/styles/baseStyle';
import petStyles from './styles';

const Pet = ({ navigation }) => {
  const pet = navigation.getParam('pet', {});

  return (
    <View style={petStyles.petContainer}>
      <VetResumenProfile imgUrl={pet.petPathImage} />
      <PetForm />
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
