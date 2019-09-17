import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: width => ({
    borderRadius: 100,
    width: width / 3,
    height: width / 3,
  }),
});

const VetImageProfile = ({ imgUrl }) => {
  const { width } = Dimensions.get('window');
  const imgSource = imgUrl ? { uri: imgUrl } : require('../assets/img/addPhoto.png');

  return (
    <View style={styles.imageContainer}>
      <Image source={imgSource} style={styles.image(width)} />
    </View>
  );
};

VetImageProfile.defaultProps = {
  imgUrl: null,
};

VetImageProfile.propTypes = {
  imgUrl: PropTypes.string,
};

export default VetImageProfile;
