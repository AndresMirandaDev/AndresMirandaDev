import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from '../AppText';
import colors from '../../config/colors';

export default function ReportListHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <AppText style={styles.text}>Datum</AppText>
      </View>
      <View style={styles.infoContainer}>
        <AppText style={styles.text}>Veckodag</AppText>
      </View>
      <View style={styles.infoContainer}>
        <AppText style={styles.text}>Arbetsplats</AppText>
      </View>
      <View style={styles.infoContainer}>
        <AppText style={styles.text}>Timmar</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: colors.primary,
  },
  infoContainer: {
    width: 105,
  },
  text: {
    color: colors.light,
  },
});
