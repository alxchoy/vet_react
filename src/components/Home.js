import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { colors } from '../assets/styles/baseStyle';
import VetButton from './shared/VetButton';

const styles = StyleSheet.create({
  backgroundImg: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: 60,
  },
  container_btn: {
    margin: 10,
  },
});

const Home = props => {
  return (
    <ImageBackground source={require('../assets/img/background.png')} style={styles.backgroundImg}>
      <View style={styles.container}>
        <View style={styles.container_btn}>
          <VetButton
            color={colors.primary}
            text="Ingresar"
            type="block"
            onPress={() => props.navigation.navigate('Login')}
          />
        </View>
        <View style={styles.container_btn}>
          <VetButton
            text="Registrar"
            type="outline"
            onPress={() => props.navigation.navigate('Register')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

Home.navigationOptions = {
  header: null,
};

Home.propTypes = {
  navigation: PropTypes.any.isRequired,
};

export default Home;
