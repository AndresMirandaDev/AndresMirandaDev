import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../../components/Screen';
import AppText from '../../components/AppText';
import colors from '../../config/colors';

export default function ReturnDetailsScreen({ route }) {
  const { tool, rentStartDate, returnDate, rentCompany } = route.params;

  const dateOfReturn = new Date(returnDate);
  const startDate = new Date(rentStartDate);

  return (
    <Screen style={styles.screen}>
      <View style={styles.infoContainer}>
        <View>
          <AppText style={styles.label}>Verktyg</AppText>
          <AppText style={styles.info}>{tool.name}</AppText>
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="tools"
            size={50}
            color={colors.primaryOpacity}
          />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View>
          <AppText style={styles.label}>Uthyrnings Företag</AppText>
          <AppText style={styles.info}>{rentCompany}</AppText>
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="city"
            size={50}
            color={colors.primaryOpacity}
          />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View>
          <AppText style={styles.label}>Inhyrdes till projekt</AppText>
          <AppText style={styles.info}>{tool.project.name}</AppText>
          <AppText style={styles.label}>
            projekt nummer {tool.project.projectNumber}
          </AppText>
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="city"
            size={50}
            color={colors.primaryOpacity}
          />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View>
          <AppText style={styles.label}>Inhyrd från datum</AppText>
          <AppText style={styles.info}>
            {startDate.toLocaleDateString()}
          </AppText>
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="calendar"
            size={50}
            color={colors.primaryOpacity}
          />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View>
          <AppText style={styles.label}>Returnerat den</AppText>
          <AppText style={styles.info}>
            {dateOfReturn.toLocaleDateString()}
          </AppText>
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="calendar-check"
            size={50}
            color={colors.primaryOpacity}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    minHeight: '100%',
  },
  label: {
    color: colors.medium,
    fontSize: 21,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: 20,
  },
});
