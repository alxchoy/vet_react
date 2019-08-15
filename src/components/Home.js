import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { colors } from '../assets/styles/baseStyle';
import Button from './shared/Button';

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

const Home = () => {
  return (
    <ImageBackground source={require('../assets/img/background.png')} style={styles.backgroundImg}>
      <View style={styles.container}>
        <View style={styles.container_btn}>
          <Button color={colors.primary} text="Ingresar" type="block" />
        </View>
        <View style={styles.container_btn}>
          <Button text="Registrar" type="outline" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
