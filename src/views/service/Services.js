import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import providerService from 'services/providerService';
import VetProvidersList from 'components/VetProvidersList';
import { AppContext } from '../../providers/AppContext';

import { colors } from '../../assets/styles/baseStyle';

const styles = StyleSheet.create({
  titleProviders: {
    fontSize: 18,
  },
  titleProvidersContainer: {
    marginHorizontal: 20,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
});

const Services = ({ navigation }) => {
  const [serviceSelected, setServiceSelected] = React.useState();
  const [providers, setProviders] = React.useState([]);
  const { appDispatch } = React.useContext(AppContext);

  const getProvidersByService = async serviceId => {
    const providerList = await providerService.getProvidersByService(serviceId);
    console.log(providerList);
  };

  React.useEffect(() => {
    const fetch = async () => {
      console.log('serviciossss');
      appDispatch({ type: 'UPDATE_LOADDING', payload: true });
      const data = await providerService.getServiceList();
      appDispatch({ type: 'UPDATE_LOADDING', payload: false });
      navigation.navigate('Search', {
        data,
        value: 'serviceId',
        description: 'serviceName',
        onCallback: item => getProvidersByService(item.serviceId),
      });
    };

    fetch();
  }, [appDispatch, navigation]);

  return (
    <View>
      <View style={styles.titleProvidersContainer}>
        <Text style={styles.titleProviders}>Clínicas</Text>
      </View>
      {/* <VetProvidersList navigation={navigation} data={items.providers} /> */}
    </View>
  );
};

Services.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

Services.navigationOptions = ({ navigation }) => {
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
    title: 'Mis mascotas',
  };
};

export default Services;
