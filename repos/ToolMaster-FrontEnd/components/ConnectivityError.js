import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import AppText from './AppText';
import AppButton from './AppButton';

export default function ConnectivityError({ loadDataFunction }) {
  return (
    <View style={styles.errorScreen}>
      <AppText>Data kunde inte hämtas.</AppText>
      <AppButton title="försök igen" onPress={loadDataFunction} />
    </View>
  );
}

const styles = StyleSheet.create({
  errorScreen: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
