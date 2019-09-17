import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../assets/styles/baseStyle';

const styles = StyleSheet.create({
  base: {
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    marginVertical: 10,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  error: {
    borderColor: colors.alert,
  },
  icon: {
    flex: 1,
  },
  inputContainer: {
    flex: 6,
  },
  textError: {
    color: colors.alert,
    fontSize: 10,
  },
});

const VetInput = ({ change, errors, icon, placeholder, property, secureInput, touched, value }) => (
  <View style={styles.container}>
    {icon && <Icon name={icon} size={30} style={styles.icon} />}
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={change}
        placeholder={placeholder}
        secureTextEntry={secureInput}
        style={[styles.base, errors[property] && touched[property] && styles.error]}
        value={value}
      />
      {errors[property] && touched[property] && (
        <Text style={styles.textError}>{errors[property]}</Text>
      )}
    </View>
  </View>
);

VetInput.defaultProps = {
  icon: null,
  secureInput: false,
};

VetInput.propTypes = {
  change: PropTypes.func.isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
  icon: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  property: PropTypes.string.isRequired,
  secureInput: PropTypes.bool,
  touched: PropTypes.instanceOf(Object).isRequired,
  value: PropTypes.string.isRequired,
};

export default VetInput;
