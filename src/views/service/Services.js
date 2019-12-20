import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import providerService from 'services/providerService';
import VetProvidersList from 'components/VetProvidersList';
import VetSearchList from 'components/VetSearchList';
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

const Services = ({ navigation }) => {
  const [services, setServices] = React.useState([]);
  const { appDispatch } = React.useContext(AppContext);

  const serviceCallBack = async item => {
    appDispatch({ type: 'UPDATE_LOADDING', payload: true });
    const data = await providerService.getProvidersByService(item.serviceId);
    appDispatch({ type: 'UPDATE_LOADDING', payload: false });
    navigation.navigate('Provider', {
      providers: data,
    });
  };

  React.useEffect(() => {
    const fetch = async () => {
      appDispatch({ type: 'UPDATE_LOADDING', payload: true });
      const data = await providerService.getServiceList();
      appDispatch({ type: 'UPDATE_LOADDING', payload: false });
      setServices(data);
    };

    fetch();
  }, [appDispatch]);

  return (
    <VetSearchList
      navigation={navigation}
      data={services}
      value="serviceId"
      description="serviceName"
      callback={serviceCallBack}
    />
  );
};

Services.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

Services.navigationOptions = ({ navigation }) => ({
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

export default Services;
