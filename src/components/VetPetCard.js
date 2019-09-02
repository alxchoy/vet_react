import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, Text, View } from 'react-native';

const VetPetCard = ({ name, age, imgUrl }) => {
  return (
    <ImageBackground source={{ uri: imgUrl }} style={{ width: 100, height: 100 }}>
      <View>
        <Text>{name}</Text>
        <Text>{`${age} años`}</Text>
      </View>
    </ImageBackground>
  );
};

VetPetCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default VetPetCard;
