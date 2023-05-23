import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from '../AppText';
import colors from '../../config/colors';

export default function ReportListFooter({ report }) {
  const places = report.workDays
    .map((workDay) => workDay.places.map((place) => place.project.name))
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index);

  const reportTotalHours = report.workDays.reduce((accumulator, workDay) => {
    const dayTotalHours = workDay.places.reduce((dayAccumulator, place) => {
      return dayAccumulator + place.hours;
    }, 0);

    return accumulator + dayTotalHours;
  }, 0);
  return (
    <View style={styles.container}>
      <View style={styles.tableHead}>
        <View style={styles.headingTextContainer}>
          <AppText style={styles.headingText}>Arbetsplatser</AppText>
        </View>
        <View style={styles.headingTextContainer}>
          <AppText style={styles.headingText}>Summa timmar</AppText>
        </View>
        <View style={styles.headingTextContainer}>
          <AppText style={styles.headingText}>Projekt nr</AppText>
        </View>
      </View>
      <View>
        {places.map((place, index) => {
          let totalHours = 0;
          let projectNumber;

          report.workDays.map((workDay) => {
            workDay.places.map((p) => {
              if (p.project.name === place) {
                totalHours += p.hours;
                projectNumber = p.project.projectNumber;
              }
            });
          });
          return (
            <View key={index} style={styles.infoContainer}>
              <View>
                <AppText style={styles.infoText}>{place}</AppText>
              </View>
              <View>
                <AppText style={styles.infoText}>{totalHours}</AppText>
              </View>
              <View>
                <AppText style={styles.infoText}>{projectNumber}</AppText>
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.reportFooter}>
        <View>
          <AppText style={styles.totalHoursText}>Summa timmar</AppText>
        </View>
        <View>
          <AppText style={styles.totalHours}>{reportTotalHours}</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  tableHead: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: colors.primaryOpacity,
  },
  headingTextContainer: {
    width: 130,
  },
  headingText: {
    color: colors.white,
  },
  infoContainer: {
    borderStyle: 'solid',
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 5,
  },
  infoText: {
    color: colors.medium,
    padding: 5,
    textTransform: 'capitalize',
    textAlign: 'center',
    width: 120,
  },
  reportFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.primaryOpacity,
    marginTop: 10,
  },
  totalHoursText: {
    fontSize: 35,
    color: colors.light,
    fontWeight: 400,
    fontStyle: 'italic',
  },
  totalHours: {
    fontSize: 35,
    color: colors.light,
    fontStyle: 'italic',
    fontWeight: 500,
  },
});
