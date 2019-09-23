import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../assets/styles/baseStyle';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  clinicContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  clinicSection: {
    flex: 4,
    flexDirection: 'row',
    borderRightWidth: 1,
    borderRightColor: colors.gray,
    alignItems: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  dataContainer: {
    flex: 1,
    paddingRight: 10,
  },
  img: {
    borderRadius: 100,
    width: 80,
    height: 80,
  },
  clinicName: {
    fontSize: 16,
    marginBottom: 5,
  },
  clinicContainerData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clinicSubtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
  },
  clinicDataDescription: {
    fontSize: 14,
    flex: 1,
  },
  clinicDetail: {
    flex: 1,
    alignItems: 'center',
  },
  clinicDetailText: {
    textAlign: 'center',
    color: colors.primary,
  },
});

const VetProvidersList = ({ navigation, data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => `${item.headquaterId}`}
        renderItem={({ item }) => (
          <View style={styles.clinicContainer}>
            <View style={styles.clinicSection}>
              <View style={styles.alignCenter}>
                <Image source={{ uri: item.pathImage }} style={styles.img} />
              </View>
              <View style={styles.dataContainer}>
                <Text style={styles.clinicName}>{item.providerName}</Text>
                <View style={styles.clinicContainerData}>
                  <Text style={styles.clinicSubtitle}>Dirección</Text>
                  <Text numberOfLines={1} style={styles.clinicDataDescription}>
                    {item.headqueaterAddress}
                  </Text>
                </View>
                <View style={styles.clinicContainerData}>
                  <Text style={styles.clinicSubtitle}>Teléfono</Text>
                  <Text style={styles.clinicDataDescription}>{item.headquaterPhone}</Text>
                </View>
              </View>
            </View>
            <View style={styles.clinicDetail}>
              <Text
                style={styles.clinicDetailText}
                onPress={() => navigation.navigate('Clinic', { clinic: item })}
              >
                Ver detalle
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

VetProvidersList.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.arrayOf(Object).isRequired,
};

export default VetProvidersList;
