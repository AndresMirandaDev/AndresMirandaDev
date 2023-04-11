import { StyleSheet, SafeAreaView, View, Appearance } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import colors from '../config/colors';

const colorScheme = Appearance.getColorScheme();
export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
