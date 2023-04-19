import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../../components/Screen';
import AppText from '../../components/AppText';
import colors from '../../config/colors';

//dummy data
// const project = [
//   {
//     name: 'spiralen',
//     address: 'uppmanargatan 25',
//     projectNumber: 11111,
//     active: true,
//     supervisor: {
//       name: 'chato luis',
//       id: 1,
//     },
//     id: 1,
//     startDate: '2/3/2023',
//     endDate: '6/9/2025',
//   },
//   {
//     name: 'drakenberg',
//     address: 'drakenbergsgatan 5',
//     projectNumber: 22222,
//     active: true,
//     supervisor: {
//       name: 'Roberto diaz',
//       id: 2,
//     },
//     id: 2,
//     startDate: '2/3/2023',
//     endDate: '6/9/2025',
//   },
// ];

export default function ProjectInfoScreen({ route }) {
  const {
    name,
    address,
    projectNumber,
    active,
    supervisor,
    startDate,
    endDate,
  } = route.params[0];

  return (
    <Screen style={styles.screen}>
      <ScrollView>
        <AppText style={styles.projectName}>{name}</AppText>
        <View style={styles.infoContainer}>
          <AppText style={styles.label}>address</AppText>
          <AppText style={styles.info}>{address}</AppText>
        </View>
        <View style={styles.infoContainer}>
          <AppText style={styles.label}>projekt nummer </AppText>
          <AppText style={styles.info}>{projectNumber}</AppText>
        </View>
        <View style={styles.infoContainer}>
          <AppText style={styles.label}>arbetsledare </AppText>
          <AppText style={styles.info}>{supervisor.name}</AppText>
        </View>
        <View style={styles.infoContainer}>
          <AppText style={styles.label}>start datum </AppText>
          <AppText style={styles.info}>{startDate}</AppText>
        </View>
        <View style={styles.infoContainer}>
          <AppText style={styles.label}>slut datum </AppText>
          <AppText style={styles.info}>{endDate}</AppText>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    minHeight: '100%',
  },
  projectName: {
    textAlign: 'center',
    fontSize: 40,
    textTransform: 'capitalize',
    color: colors.medium,
    margin: 5,
    padding: 20,
  },
  infoContainer: {
    flexDirection: 'column',
    padding: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.primary,
    margin: 10,
    borderRadius: 20,
    shadowColor: colors.dark,
    shadowOpacity: 0.5,
    shadowOffset: { height: 10, width: 10 },
    shadowRadius: 6,
    elevation: 10,
  },
  label: {
    color: colors.yellow,
    textTransform: 'capitalize',
    fontSize: 20,
  },
  info: {
    color: colors.light,
    textTransform: 'capitalize',
  },
});
