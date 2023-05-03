import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../../components/Screen';
import colors from '../../config/colors';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';

//dummy data

// const tool = {
//   name: 'hilti 1500',
//   id: 1,
//   serieNumber: 12345,
//   toolGroup: { name: 'asbestsanering', description: 'some description' },
//   project: { name: 'spiralen', projectNumber: 12333 },
//   available: true,
// };

//should recieve the tool from the route params comming in the tool list screen onpress handler with navigation to this component

//edit button should navigate to the edit screen, passing the tool in the route params, so it can take the info of the about to edit toool and display it while editing
export default function ToolDetailsScreen({ route, navigation }) {
  const tool = route.params;
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <AppText style={styles.title}>{tool.name}</AppText>
      </View>
      <View style={styles.infoContainer}>
        <AppText style={styles.label}>Serie nummer</AppText>
        <AppText style={styles.info}>{tool.serieNumber}</AppText>
      </View>
      {tool.project && (
        <View style={styles.infoContainer}>
          <AppText style={styles.label}>Nuvarande plats</AppText>
          <AppText style={styles.info}>
            {tool.project ? tool.project.name : 'i förråd'}
          </AppText>
        </View>
      )}
      {tool.toolGroup && (
        <View style={styles.infoContainer}>
          <AppText style={styles.label}>Vertkygs Grupp</AppText>
          <AppText style={styles.info}>{tool.toolGroup.name}</AppText>
        </View>
      )}
      <View style={styles.infoContainer}>
        <AppText style={styles.label}>Status : </AppText>
        <AppText
          style={{
            color: tool.available ? colors.green : colors.danger,
            fontWeight: 'bold',
          }}
        >
          {tool.available ? 'Tillgängligt' : 'Upptagen'}
        </AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Sätt som tillgängligt" color="green" />
        <AppButton
          title="Regidera"
          onPress={() => {
            navigation.navigate('EditToolScreen', [tool]);
          }}
        />
        <AppButton title="Radera Verktyg" color="danger" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    marginTop: 20,
  },
  label: {
    color: colors.light,
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
    backgroundColor: colors.primaryOpacity,
    margin: 10,
    borderRadius: 20,
    shadowColor: colors.dark,
    shadowOpacity: 0.2,
    shadowOffset: { height: 10, width: 10 },
    shadowRadius: 6,
    elevation: 10,
  },
});
