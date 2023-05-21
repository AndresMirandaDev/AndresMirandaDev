import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

const months = {
  1: 'Januari',
  2: 'Februari',
  3: 'Mars',
  4: 'April',
  5: 'Maj',
  6: 'Juni',
  7: 'Juli',
  8: 'Augusti',
  9: 'September',
  10: 'Oktober',
  11: 'November',
  12: 'December',
};

export default function SalaryReportListItem({ report }) {
  const { date, workdDays } = report;

  const showDate = new Date(date);
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="file-document-outline"
            size={30}
            color={colors.primaryOpacity}
          />
        </View>
        <AppText style={styles.label}>Lön rapport</AppText>
        <AppText style={styles.month}>
          {months[showDate.getMonth() + 1]}
        </AppText>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,

    padding: 30,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    marginRight: 10,
    color: colors.medium,
    fontSize: 21,
    fontStyle: 'italic',
  },
  month: {
    color: colors.primaryOpacity,
    fontSize: 22,
    fontWeight: '800',
  },
});
