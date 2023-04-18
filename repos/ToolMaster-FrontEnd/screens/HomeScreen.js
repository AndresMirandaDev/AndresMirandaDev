import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';

import Screen from '../components/Screen';
import colors from '../config/colors';
import AppText from '../components/AppText';
import HomeInfoList from '../components/HomeInfoList';

const user = {
  id: 1,
  name: 'Andres',
  email: 'andres@domail.com',
};

const tools = [
  { name: 'hili 1500', id: 1 },
  { name: 'hili 1000', id: 2 },
  { name: 'hili 500', id: 3 },
];

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.headBar}>
          <Image
            source={require('../assets/logo.png')}
            resizeMode="contain"
            style={styles.logo}
          />
          <AppText style={styles.username}>{user.name}</AppText>
        </View>
        <HomeInfoList />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.medium,
  },
  headBar: {
    backgroundColor: colors.primary,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: colors.dark,
    shadowOffset: { height: 10, width: 5 },
    shadowOpacity: 0.1,
    elevation: 20,
  },
  logo: {
    width: 80,
    height: 80,
  },
  username: {
    fontSize: 25,
    color: colors.light,
  },
});
