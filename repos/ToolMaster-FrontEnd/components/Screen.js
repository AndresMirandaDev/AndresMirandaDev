import {
  StyleSheet,
  SafeAreaView,
  View,
  Appearance,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import colors from '../config/colors';

const colorScheme = Appearance.getColorScheme();
export default function Screen({ children, style }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={[styles.screen, style]}>
        <View style={style}>{children}</View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
