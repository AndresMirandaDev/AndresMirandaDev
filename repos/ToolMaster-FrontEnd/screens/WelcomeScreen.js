import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import React from 'react';
import AppButton from '../components/AppButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from '../components/AppText';

export default function WelcomeScreen({ navigation }) {
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
        <AppText style={styles.tagLine}>A ToolMaster Application</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          color="primary"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />

        <AppText style={styles.copyright}>
          Developed by Andres Miranda{' '}
          <MaterialCommunityIcons name="copyright" color={colors.primary} />{' '}
        </AppText>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
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
  tagLine: {
    color: colors.white,
    textAlign: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  copyright: {
    color: colors.light,
    textAlign: 'center',
    fontSize: 12,
  },
});
