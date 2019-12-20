import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import providerService from 'services/providerService';

import VetImageProfile from 'components/VetImageProfile';
import VetItemsList from 'components/VetItemsList';
import VetButton from 'components/VetButton';
import { AppContext } from '../../providers/AppContext';

import { colors } from '../../assets/styles/baseStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin: 20,
    marginBottom: 0,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  documentType: {
    marginVertical: 10,
  },
  providerCard: {
    padding: 10,
    marginLeft: 15,
    width: 250,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    flex: 1,
    fontSize: 12,
  },
  icon: {
    marginRight: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 3,
  },
  title: {
    marginBottom: 6,
  },
  horizontalList: {
    paddingVertical: 15,
  },
  touchable: {
    padding: 5,
  },
  titleSection: {
    fontSize: 18,
    marginHorizontal: 20,
    marginTop: 10,
  },
  footer: {
    backgroundColor: colors.gray,
    padding: 20,
    marginTop: 10,
  },
});

const Clinic = ({ navigation }) => {
  const [sedes, setSedes] = React.useState([]);
  const [especialidades, setEspecialidades] = React.useState([]);
  const [productos, setProductos] = React.useState([]);
  const [servicios, setServicios] = React.useState([]);
  const { appDispatch } = React.useContext(AppContext);
  const clinic = navigation.getParam('clinic', null);

  React.useEffect(() => {
    const fetch = async () => {
      appDispatch({ type: 'UPDATE_LOADDING', payload: true });
      const providerData = await providerService.getProviderData(clinic.providerId);
      const sedesList = providerData.headquaters.map(sede => ({ ...sede, selected: false }));
      console.log(sedesList);
      setSedes(sedesList);
      appDispatch({ type: 'UPDATE_LOADDING', payload: false });
    };

    fetch();
  }, [appDispatch, clinic.providerId]);

  const selectSede = sede => {
    setEspecialidades(sede.specialties);
    setProductos(sede.products);
    setServicios(sede.services);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <VetImageProfile imgUrl={clinic.pathImage} />
          <Text style={styles.documentType}>{clinic.providerDocumentType}</Text>
          <Text>{clinic.providerDocumentNumber}</Text>
        </View>
        <View>
          <FlatList
            style={styles.horizontalList}
            horizontal
            data={sedes}
            keyExtractor={item => `${item.providerHeadquartersId}`}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback style={styles.touchable} onPress={() => selectSede(item)}>
                <View style={styles.providerCard}>
                  <View>
                    <Text numberOfLines={1} style={styles.title}>
                      {item.providerHeadquartersDescription}
                    </Text>
                  </View>
                  <View style={styles.row}>
                    <Icon style={styles.icon} name="location-arrow" size={14} />
                    <Text numberOfLines={1} style={styles.text}>
                      {item.providerHeadquartersAddress}
                    </Text>
                  </View>
                  <View style={styles.row}>
                    <Icon style={styles.icon} name="phone" size={16} />
                    <Text numberOfLines={1} style={styles.text}>
                      {item.providerHeadquartersPhone}
                    </Text>
                  </View>
                  <View style={styles.row}>
                    <Icon style={styles.icon} name="envelope" size={16} />
                    <Text numberOfLines={1} style={styles.text}>
                      {item.providerHeadquartersEmail}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </View>
        {especialidades.length > 1 && (
          <View>
            <Text style={styles.titleSection}>Especialidades</Text>
            <VetItemsList
              data={especialidades}
              propertyItem="specialtyName"
              valueItem="specialtyId"
            />
          </View>
        )}
        {productos.length > 1 && (
          <View>
            <Text style={styles.titleSection}>Productos</Text>
            <VetItemsList data={productos} propertyItem="productName" valueItem="productId" />
          </View>
        )}
        {servicios.length > 1 && (
          <View>
            <Text style={styles.titleSection}>Servicios</Text>
            <VetItemsList data={servicios} propertyItem="serviceName" valueItem="serviceId" />
          </View>
        )}
      </ScrollView>
      <View style={styles.footer}>
        <VetButton
          color={colors.primary}
          onPress={() => navigation.navigate('Bandeja')}
          text="Mis mascotas"
          type="block"
        />
      </View>
    </View>
  );
};

Clinic.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

Clinic.navigationOptions = ({ navigation }) => {
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
    title: 'Clínica',
  };
};

export default Clinic;
