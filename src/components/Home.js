import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    alignItems: 'center',
    paddingVertical: 15,
    margin: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: 60,
  },
  backgroundImg: {
    width: '100%',
    height: '100%',
  },
});

const Home = () => {
  return (
    <ImageBackground source={require('../assets/img/background.png')} style={styles.backgroundImg}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{'Ingresar'.toUpperCase()}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>{'Registrarse'.toUpperCase()}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;
