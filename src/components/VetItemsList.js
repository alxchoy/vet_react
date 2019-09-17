import React from 'react';
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

const VetItemsList = ({ data }) => {
  const [list, setList] = React.useState([]);
  const sections = [
    { id: 'a', description: 'aa' },
    { id: 'b', description: 'bb' },
    { id: 'c', description: 'cc' },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={sections}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.description}</Text>
            <Icon
              name="trash"
              size={20}
              color={colors.alert}
              onPress={() => console.log('delete')}
            />
          </View>
        )}
      />
    </View>
  );
};

export default VetItemsList;
