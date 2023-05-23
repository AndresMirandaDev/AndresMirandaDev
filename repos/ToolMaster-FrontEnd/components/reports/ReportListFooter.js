import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from '../AppText';
import colors from '../../config/colors';

export default function ReportListFooter({ report }) {
  const places = report.workDays
    .map((workDay) => workDay.places.map((place) => place.project.name))
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <View style={styles.container}>
      <View style={styles.tableHead}>
        <View>
          <AppText style={styles.headingText}>Arbetsplatser</AppText>
        </View>
        <View>
          <AppText style={styles.headingText}>Summa timmar</AppText>
        </View>
        <View>
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
            <View key={place.index} style={styles.infoContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  tableHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: colors.primaryOpacity,
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
});
