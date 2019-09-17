import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

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
  error: {
    borderColor: colors.alert,
  },
  date: {
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
    paddingVertical: 3,
    paddingHorizontal: 15,
    width: '100%',
  },
  textError: {
    color: colors.alert,
    fontSize: 10,
  },
});

const VetDate = ({ change, icon, errors, touched, property }) => {
  const [date, setDate] = React.useState('');

  return (
    <View style={styles.container}>
      {icon && <Icon name={icon} size={30} style={styles.icon} />}
      <View style={styles.inputContainer}>
        <DatePicker
          cancelBtnText="Cancelar"
          confirmBtnText="Confirmar"
          customStyles={{
            dateIcon: {
              display: 'none',
            },
            dateInput: {
              margin: 0,
              alignItems: 'flex-start',
              borderWidth: 0,
            },
          }}
          date={date}
          format="DD-MM-YYYY"
          onDateChange={val => {
            setDate(val);
            change(val);
          }}
          placeholder="Fecha de nacimiento"
          style={[styles.date, errors[property] && touched[property] && styles.error]}
        />
        {errors[property] && touched[property] && (
          <Text style={styles.textError}>{errors[property]}</Text>
        )}
      </View>
    </View>
  );
};

VetDate.defaultProps = {
  icon: null,
};

VetDate.propTypes = {
  change: PropTypes.func.isRequired,
  icon: PropTypes.string,
  errors: PropTypes.instanceOf(Object).isRequired,
  touched: PropTypes.instanceOf(Object).isRequired,
  property: PropTypes.string.isRequired,
};

export default VetDate;
