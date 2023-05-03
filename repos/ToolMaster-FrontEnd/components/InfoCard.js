import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from './AppText';
import colors from '../config/colors';

export default function InfoCard({ infoToDisplay, data }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>
        {infoToDisplay} {data}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryOpacity,
    padding: 50,
    margin: 10,
    shadowOpacity: 0.2,
    shadowColor: colors.dark,
    shadowOffset: { height: 10, width: 10 },
    shadowRadius: 12,
    borderRadius: 20,
    elevation: 12,
  },
  text: {
    color: colors.white,
  },
});
