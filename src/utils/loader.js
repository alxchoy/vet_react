import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { colors } from '../assets/styles/baseStyle';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
});

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={colors.primary} />
  </View>
);

export default Loader;
