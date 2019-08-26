import React from 'react';
import PropTypes from 'prop-types';
import { Modal, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignSelf: 'center',
  },
});

const VetInfoModal = ({ children }) => (
  <Modal transparent animationType="fade">
    <View style={styles.wrapper}>
      <View style={styles.container}>{children}</View>
    </View>
  </Modal>
);

VetInfoModal.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default VetInfoModal;
