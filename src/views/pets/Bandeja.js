import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import VetPetCard from 'components/VetPetCard';
import petService from 'services/petService';
import { colors } from '../../assets/styles/baseStyle';
import petStyles from './styles';

const Bandeja = ({ navigation }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const petList = await petService.getPetList();
      setPets(petList);
    };

    fetch();
  }, []);

  return (
    <View style={petStyles.petContainer}>
      <TouchableOpacity style={petStyles.addPetBtn} onPress={() => console.log('hola')}>
        <View style={petStyles.addPetBtnInner}>
          <Icon
            name="plus-circle"
            color={colors.primary}
            size={25}
            style={petStyles.addPetBtnIcon}
          />
          <Text style={petStyles.addPetBtnText}>Agregar mascota</Text>
        </View>
      </TouchableOpacity>
      <FlatList
        style={petStyles.list}
        data={pets}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={petStyles.listItem}
            onPress={() =>
              navigation.navigate('Pet', {
                pet: item,
              })
            }
          >
            <VetPetCard name={item.petName} age={item.petAge} imgUrl={item.petPathImage} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => item.petId}
      />
    </View>
  );
};

Bandeja.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

Bandeja.navigationOptions = ({ navigation }) => {
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

export default Bandeja;
