import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';

import { colors } from '../../assets/styles/baseStyle';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  loader: {
    alignSelf: 'center',
  },
});

const VetLoader = () => (
  <Modal transparent animationType="fade">
    <View style={styles.container}>
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    </View>
  </Modal>
);

export default VetLoader;
