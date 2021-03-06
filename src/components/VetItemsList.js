import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../assets/styles/baseStyle';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  text: {
    marginRight: 10,
  },
});

const VetItemsList = ({ data, propertyItem, valueItem }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => `${item[valueItem]}`}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.text}>{item[propertyItem]}</Text>
            <Icon name="info" size={20} color={colors.alert} onPress={() => {}} />
          </View>
        )}
      />
    </View>
  );
};

VetItemsList.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
  propertyItem: PropTypes.string.isRequired,
  valueItem: PropTypes.string.isRequired,
};

export default VetItemsList;
