import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../../components/Screen';
import AppText from '../../components/AppText';
import colors from '../../config/colors';
import AppButton from '../../components/AppButton';

export default function ProjectInfoScreen({ route, navigation }) {
  const {
    name,
    address,
    projectNumber,
    active,
    supervisor,
    startDate,
    endDate,
  } = route.params;

  const projectStartDate = new Date(startDate);
  const projectEndDate = new Date(endDate);

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
        {supervisor && (
          <View style={styles.infoContainer}>
            <AppText style={styles.label}>arbetsledare </AppText>
            <AppText style={styles.info}>{supervisor.name}</AppText>
          </View>
        )}
        <View style={styles.infoContainer}>
          <AppText style={styles.label}>start datum </AppText>
          <AppText style={styles.info}>
            {projectStartDate.toLocaleDateString()}
          </AppText>
        </View>
        <View style={styles.infoContainer}>
          <AppText style={styles.label}>slut datum </AppText>
          <AppText style={styles.info}>
            {projectEndDate.toLocaleDateString()}
          </AppText>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Redigera / Uppdatera"
            color="green"
            onPress={() => {
              navigation.navigate('EditProjectScreen', route.params);
            }}
          />
          <AppButton
            title="avsända verktyg"
            onPress={() => {
              navigation.navigate('DispatchToolScreen', route.params);
            }}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    minHeight: '100%',
    backgroundColor: colors.white,
  },
  projectName: {
    textAlign: 'center',
    fontSize: 40,
    textTransform: 'capitalize',
    color: colors.primary,
    margin: 5,
    padding: 20,
  },
  infoContainer: {
    flexDirection: 'column',
    padding: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.primaryOpacity,
    margin: 10,
    borderRadius: 20,
    shadowColor: colors.dark,
    shadowOpacity: 0.5,
    shadowOffset: { height: 10, width: 10 },
    shadowRadius: 6,
    elevation: 10,
  },
  label: {
    color: colors.light,
    textTransform: 'capitalize',
    fontSize: 20,
  },
  info: {
    color: colors.light,
    textTransform: 'capitalize',
  },
  buttonContainer: {
    padding: 10,
    margin: 10,
  },
});
