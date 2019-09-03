import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    margin: 5,
    padding: 5,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
  },
});

const VetPetCard = ({ name, age, imgUrl }) => {
  return (
    <ImageBackground source={{ uri: imgUrl }} style={styles.container}>
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{`${age} años`}</Text>
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
