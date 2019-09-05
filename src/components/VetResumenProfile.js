import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../assets/styles/baseStyle';
import VetImageProfile from './VetImageProfile';

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  infoItem: {
    flex: 1,
    paddingHorizontal: 10,
    overflow: 'hidden',
  },
  infoItemTitle: {
    fontSize: 14,
  },
  infoItemSubtitle: {
    fontSize: 18,
  },
  infoItemBorderRight: {
    borderRightColor: colors.gray,
    borderRightWidth: 1,
  },
});

const VetResumenProfile = ({ imgUrl }) => {
  return (
    <View>
      <VetImageProfile imgUrl={imgUrl} />
      <View style={styles.infoContainer}>
        <View style={[styles.infoItem, styles.infoItemBorderRight]}>
          <Text numberOfLines={1} style={styles.infoItemTitle}>
            Nombre
          </Text>
          <Text numberOfLines={1} style={styles.infoItemSubtitle}>
            Peluchin Tercero
          </Text>
        </View>
        <View style={[styles.infoItem, styles.infoItemBorderRight]}>
          <Text numberOfLines={1} style={styles.infoItemTitle}>
            Edad
          </Text>
          <Text numberOfLines={1} style={styles.infoItemSubtitle}>
            3 a. 9 m.
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text numberOfLines={1} style={styles.infoItemTitle}>
            Raza
          </Text>
          <Text numberOfLines={1} style={styles.infoItemSubtitle}>
            Cocker Spanish
          </Text>
        </View>
      </View>
    </View>
  );
};

VetResumenProfile.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default VetResumenProfile;
