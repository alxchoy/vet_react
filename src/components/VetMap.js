import React from 'react';
import PropTypes from 'prop-types';
import MapView, { Callout, Marker } from 'react-native-maps';
import { Dimensions, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../assets/styles/baseStyle';

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    width: 200,
  },
  detail: {
    color: colors.primary,
    marginTop: 10,
    alignSelf: 'flex-end',
  },
});

const Map = ({ navigation }) => {
  const data = navigation.getParam('data', []);
  const { height, width } = Dimensions.get('window');

  return (
    <MapView
      style={[styles.map, { width }]}
      region={{
        latitude: -11.99437,
        longitude: -77.063249,
        latitudeDelta: 0.08,
        longitudeDelta: 0.08 * (width / height),
      }}
    >
      {data.map(item => (
        <Marker
          key={item.headquaterId}
          coordinate={{ latitude: parseFloat(item.latitud), longitude: parseFloat(item.longitud) }}
        >
          <Callout onPress={() => navigation.navigate('Clinic', { clinic: item })}>
            <View style={styles.container}>
              <Text numberOfLines={1}>{item.providerName}</Text>
              <Text numberOfLines={1}>{item.headquaterDescription}</Text>
              <Text style={styles.detail}>Ver detalle</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
};

Map.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

Map.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: (
      <View>
        <Icon.Button
          backgroundColor={colors.primary}
          color="white"
          name="chevron-left"
          size={20}
          onPress={() => navigation.goBack(null)}
        />
      </View>
    ),
    headerStyle: {
      borderBottomColor: 'transparent',
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white',
    },
    title: 'Map',
  };
};

export default Map;
