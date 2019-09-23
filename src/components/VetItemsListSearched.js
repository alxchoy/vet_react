import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../assets/styles/baseStyle';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
});

const VetItemsListSearched = ({ data, propertyItem, valueItem, onCallbackDelete }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => `${item[valueItem]}`}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item[propertyItem]}</Text>
            <Icon
              name="trash"
              size={20}
              color={colors.alert}
              onPress={() => onCallbackDelete(item)}
            />
          </View>
        )}
      />
    </View>
  );
};

VetItemsListSearched.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
  propertyItem: PropTypes.string.isRequired,
  valueItem: PropTypes.string.isRequired,
  onCallbackDelete: PropTypes.func.isRequired,
};

export default VetItemsListSearched;
