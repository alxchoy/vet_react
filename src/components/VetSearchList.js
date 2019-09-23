import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
  row: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

const VetSearchList = ({ navigation, data, value, description }) => {
  const dataList = data || navigation.getParam('data', []);
  const valueProperty = value || navigation.getParam('value', null);
  const descriptionProperty = description || navigation.getParam('description', null);

  return (
    <View>
      <FlatList
        data={dataList}
        keyExtractor={item => `${item[valueProperty]}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.state.params.onCallback(item);
              navigation.goBack();
            }}
          >
            <View style={styles.row} on>
              <Text>{item[descriptionProperty]}</Text>
            </View>
          </TouchableOpacity>
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
