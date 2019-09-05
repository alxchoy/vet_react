import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../assets/styles/baseStyle';

const styles = StyleSheet.create({
  select: {
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    paddingRight: 30,
    marginVertical: 10,
  },
});

const VetSelect = ({ listItems, change }) => {
  return (
    <>
      <RNPickerSelect
        items={[{ label: 'a', value: 'a' }, { label: 'b', value: 'b' }]}
        Icon={() => <Icon name="sort-down" size={25} color="gray" />}
        onValueChange={change}
        placeholder={{
          label: 'Seleccionar',
          value: null,
        }}
        style={{
          inputIOS: styles.select,
          inputAndroid: styles.select,
          iconContainer: { top: 15, right: 15 },
        }}
      />
    </>
  );
};

VetSelect.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VetSelect;
