import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../../assets/styles/baseStyle';

const styles = StyleSheet.create({
  base: {
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    marginVertical: 10,
  },
  error: {
    borderColor: colors.alert,
  },
  textError: {
    color: colors.alert,
    fontSize: 10,
  },
});

const VetInput = ({ change, errors, placeholder, property, secureInput, value }) => (
  <>
    <TextInput
      onChangeText={change}
      placeholder={placeholder}
      secureTextEntry={secureInput}
      style={[styles.base, errors[property] && styles.error]}
      value={value}
    />
    {errors[property] && <Text style={styles.textError}>{errors[property]}</Text>}
  </>
);

VetInput.defaultProps = {
  secureInput: false,
};

VetInput.propTypes = {
  change: PropTypes.func.isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
  placeholder: PropTypes.string.isRequired,
  property: PropTypes.string.isRequired,
  secureInput: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

export default VetInput;
