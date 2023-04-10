import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import React from 'react';
import AppButton from '../components/AppButton';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
      blurRadius={6}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          color="primary"
          onPress={() => {
            console.log('login pressed');
          }}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => {
            console.log('register pressed');
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 100,
    margin: 10,
  },
  logo: {
    width: 200,
    height: 200,
    margin: 10,
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
});
