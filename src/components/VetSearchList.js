import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../assets/styles/baseStyle';

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  input: {
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    paddingLeft: 40,
  },
  inputIcon: {
    position: 'absolute',
    left: 15,
    top: 5,
  },
  right: {
    color: 'white',
  },
});

const VetSearchList = ({ navigation }) => {
  const dataList = navigation.getParam('data', []);
  const value = navigation.getParam('value', null);
  const description = navigation.getParam('description', null);

  return (
    <View>
      <FlatList
        data={dataList}
        keyExtractor={item => `${item[value]}`}
        renderItem={({ item }) => (
          <View>
            <Text>{item[description]}</Text>
          </View>
        )}
      />
    </View>
  );
};

VetSearchList.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

VetSearchList.navigationOptions = ({ navigation }) => ({
  headerLeft: null,
  headerRight: <Text style={styles.right}>Cancelar</Text>,
  headerRightContainerStyle: {
    marginRight: 20,
  },
  headerTitle: (
    <View style={styles.inputContainer}>
      <Icon name="search" size={18} color={colors.gray} style={styles.inputIcon} />
      <TextInput style={styles.input} />
    </View>
  ),
  headerTitleContainerStyle: {
    left: 0,
  },
  headerStyle: {
    borderBottomColor: 'transparent',
    backgroundColor: colors.primary,
  },
});

export default VetSearchList;
