import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../config/colors';
import AppText from '../AppText';

export default function SubmittedWorkDaysListFooter({ workDays }) {
  const totalHours = workDays.reduce((total, workDay) => {
    const placeHours = workDay.places.reduce(
      (sum, place) => sum + parseInt(place.hours),
      0
    );
    return total + placeHours;
  }, 0);
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <AppText style={styles.text}>Summa timmar</AppText>
      </View>
      <View>
        <AppText style={styles.totalHours}>{totalHours}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: colors.primaryOpacity,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: colors.light,
  },
  totalHours: {
    color: colors.light,
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
