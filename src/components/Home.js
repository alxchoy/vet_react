import React from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing, ImageBackground, StyleSheet, View } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

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
  AsyncStorage.clear();

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
  headerTransparent: true,
  transitionConfig: () => ({
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      });

      return { transform: [{ translateX }] };
    },
  }),
};

Home.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default Home;
