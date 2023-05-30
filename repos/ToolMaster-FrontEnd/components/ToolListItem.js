import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import AppText from './AppText';
import colors from '../config/colors';

export default function ToolListItem({ tool, onPress }) {
  const { name, serieNumber, toolGroup, project, available } = tool;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: colors.white,
    width: '100%',
    padding: 10,
  },
  toolName: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '800',
    color: colors.primaryOpacity,
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
