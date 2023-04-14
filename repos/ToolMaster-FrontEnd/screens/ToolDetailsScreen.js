import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import colors from '../config/colors';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

//dummy data

const tool = {
  name: 'hilti 1500',
  id: 1,
  serieNumber: 12345,
  toolGroup: { name: 'asbestsanering', description: 'some description' },
  project: { name: 'spiralen', projectNumber: 12333 },
  available: true,
};

//should recieve the tool from the route params comming in the tool list screen onpress handler with navigation to this component
export default function ToolDetailsScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <AppText style={styles.title}>{tool.name}</AppText>
      </View>
      <View>
        <AppText style={styles.info}>Serie nummer : {tool.serieNumber}</AppText>
      </View>
      <View>
        <AppText style={styles.info}>
          Nuvarande projekt : {tool.project.name}
        </AppText>
      </View>
      <View>
        <AppText style={styles.info}>
          Vertkygs Grupp : {tool.toolGroup.name}
        </AppText>
      </View>
      <View>
        <AppText style={styles.info}>
          Status :{' '}
          <AppText
            style={{
              color: tool.available ? colors.green : colors.danger,
              fontWeight: 'bold',
            }}
          >
            {tool.available ? 'Tillgängligt' : 'Upptagen'}
          </AppText>
        </AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Regidera" />
        <AppButton title="Radera Verktyg" color="danger" />
        <AppButton title="Sätt som tillgängligt" color="green" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
  },
  container: {},
  info: {
    color: colors.medium,
    fontSize: 20,
    padding: 10,
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
});
