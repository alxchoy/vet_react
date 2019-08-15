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
    borderWidth: 2,
    paddingVertical: 15,
  },
  text: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: 'white',
  },
});

const Button = props => {
  const { color, onPress, text, type } = props;
  const styleBtn = styles[type];

  return (
    <TouchableOpacity
      style={[styles.button, styleBtn, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  color: 'transparent',
};

Button.propTypes = {
  color: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['block', 'outline']).isRequired,
};

export default Button;
