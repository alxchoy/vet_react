import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    borderRadius: 30,
    paddingVertical: 15,
  },
  outline: {
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
    paddingVertical: 15,
  },
  blockSecondary: {
    alignItems: 'center',
    borderRadius: 30,
    paddingVertical: 10,
  },
  text: type => ({
    fontSize: type === 'blockSecondary' ? 16 : 20,
    color: 'white',
  }),
});

const VetButton = ({ color, text, type, onPress }) => {
  const styleBtn = styles[type];

  return (
    <TouchableOpacity
      style={[styles.button, styleBtn, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text(type)}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

VetButton.defaultProps = {
  color: 'transparent',
};

VetButton.propTypes = {
  color: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['block', 'blockSecondary', 'outline']).isRequired,
};

export default VetButton;
