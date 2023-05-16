import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../../components/Screen';
import colors from '../../config/colors';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';

//dummy data

// const tool = {
//   name: 'hilti 1500',
//   rentedTo: 'global',
//   rentStart: new Date(),
// };

//should recieve the tool from the route params comming in the tool list screen onpress handler with navigation to this component

//edit button should navigate to the edit screen, passing the tool in the route params, so it can take the info of the about to edit toool and display it while editing
export default function RentedToolDetailsScreen({ route }) {
  const tool = route.params;
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <AppText style={styles.title}>{tool.name}</AppText>
      </View>
      <View style={styles.infoContainer}>
        <AppText style={styles.label}>Uthyrnings Företag</AppText>
        <AppText style={styles.info}>{tool.rentedTo}</AppText>
      </View>

      <View style={styles.infoContainer}>
        <AppText style={styles.label}>Inhyrd Från - datum</AppText>
        <AppText style={styles.info}>{tool.rentStart}</AppText>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="återvända verktyg" color="green" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    marginTop: 70,
  },
  label: {
    color: colors.yellow,
    textTransform: 'capitalize',
  },
  info: {
    color: colors.light,
    fontSize: 20,
    padding: 5,
    textTransform: 'capitalize',
  },
  screen: {
    backgroundColor: colors.light,
    flex: 1,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 40,
    fontWeight: '800',
    color: colors.primary,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.primary,
    margin: 10,
    borderRadius: 20,
    shadowColor: colors.dark,
    shadowOpacity: 0.3,
    shadowOffset: { height: 10, width: 10 },
    shadowRadius: 6,
    elevation: 10,
  },
});
