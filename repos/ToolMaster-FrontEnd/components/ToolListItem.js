import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from './AppText';
import colors from '../config/colors';

export default function ToolListItem({ tool }) {
  const { name, serieNumber, toolGroup, project, available } = tool;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <AppText style={styles.toolName}>{name}</AppText>
        <AppText style={styles.info}>Serie nr: {serieNumber}</AppText>
        {toolGroup && (
          <AppText style={styles.info}>Grupp: {toolGroup.name}</AppText>
        )}
        {(project && (
          <AppText style={styles.info}>Projekt: {project.name}</AppText>
        )) || <AppText style={styles.info}>Förråd</AppText>}
        <AppText
          style={[
            styles.status,
            { color: available ? colors.green : colors.danger },
          ]}
        >
          {available ? 'Tillgängligt' : 'i användning'}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    backgroundColor: colors.light,
    width: '100%',
    padding: 20,
    borderRadius: 15,
    elevation: 8,
    shadowOffset: { height: 10, width: 10 },
    shadowColor: colors.dark,
    shadowOpacity: 0.1,
  },
  toolName: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.primary,
    textTransform: 'capitalize',
  },
  info: {
    textTransform: 'capitalize',
    color: colors.medium,
    padding: 5,
  },
  status: {
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
});
