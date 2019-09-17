import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';

import storageService from 'services/storageService';
import petService from 'services/petService';

import { colors } from '../assets/styles/baseStyle';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
  },
  inputContainer: {
    flex: 6,
  },
  select: (errors, touched, property) => ({
    borderColor: errors[property] && touched[property] ? colors.alert : colors.gray,
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    paddingRight: 30,
    marginVertical: 10,
  }),
  textError: {
    color: colors.alert,
    fontSize: 10,
  },
});

const VetSelect = ({
  change,
  dependingValue,
  errors,
  icon,
  lookupName,
  lookupPropertyName,
  lookupPropertyValue,
  property,
  touched,
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      if (lookupName === 'breed' && dependingValue) {
        setData([]);
        const lookups = await petService.getBreedList(dependingValue);
        setData(lookups);
        return;
      }

      const lookups = await storageService.getData('@vet_lookups');
      const lookupsParsed = JSON.parse(lookups);
      setData(lookupsParsed[lookupName]);
    };

    fetch();
  }, [dependingValue, lookupName]);

  return (
    <View style={styles.container}>
      {icon && <Icon name={icon} size={30} style={styles.icon} />}
      <View style={styles.inputContainer}>
        <RNPickerSelect
          items={
            data
              ? data.map(item => ({
                  label: item[lookupPropertyName],
                  value: item[lookupPropertyValue],
                }))
              : []
          }
          Icon={() => <Icon name="sort-down" size={25} color="gray" />}
          onValueChange={change}
          placeholder={{
            label: 'Seleccionar',
            value: null,
          }}
          style={{
            inputIOS: styles.select(errors, touched, property),
            inputAndroid: styles.select(errors, touched, property),
            iconContainer: { top: 15, right: 15 },
          }}
        />
        {errors[property] && touched[property] && (
          <Text style={styles.textError}>{errors[property]}</Text>
        )}
      </View>
    </View>
  );
};

VetSelect.defaultProps = {
  dependingValue: null,
  icon: null,
};

VetSelect.propTypes = {
  change: PropTypes.func.isRequired,
  dependingValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  errors: PropTypes.instanceOf(Object).isRequired,
  icon: PropTypes.string,
  lookupName: PropTypes.string.isRequired,
  lookupPropertyName: PropTypes.string.isRequired,
  lookupPropertyValue: PropTypes.string.isRequired,
  property: PropTypes.string.isRequired,
  touched: PropTypes.instanceOf(Object).isRequired,
};

export default VetSelect;
