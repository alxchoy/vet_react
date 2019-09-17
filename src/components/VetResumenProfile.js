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

const VetResumenProfile = ({ petInfo }) => {
  return (
    <View>
      <VetImageProfile imgUrl={petInfo ? petInfo.petPathImage : null} />
      {petInfo && (
        <View style={styles.infoContainer}>
          <View style={[styles.infoItem, styles.infoItemBorderRight]}>
            <Text numberOfLines={1} style={styles.infoItemTitle}>
              Nombre
            </Text>
            <Text numberOfLines={1} style={styles.infoItemSubtitle}>
              {petInfo.petName}
            </Text>
          </View>
          <View style={[styles.infoItem, styles.infoItemBorderRight]}>
            <Text numberOfLines={1} style={styles.infoItemTitle}>
              Edad
            </Text>
            <Text numberOfLines={1} style={styles.infoItemSubtitle}>
              {petInfo.petAge}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Text numberOfLines={1} style={styles.infoItemTitle}>
              Raza
            </Text>
            <Text numberOfLines={1} style={styles.infoItemSubtitle}>
              {petInfo.raceName}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

VetResumenProfile.defaultProps = {
  petInfo: null,
};

VetResumenProfile.propTypes = {
  petInfo: PropTypes.instanceOf(Object),
};

export default VetResumenProfile;
