import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Screen from '../../components/Screen';
import colors from '../../config/colors';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';
import toolsApi from '../../api/tools';
import RemovedScreen from '../RemovedScreen';

//dummy data

// const tool = {
//   name: 'hilti 1500',
//   id: 1,
//   serieNumber: 12345,
//   toolGroup: { name: 'asbestsanering', description: 'some description' },
//   project: { name: 'spiralen', projectNumber: 12333 },
//   available: true,
// };

export default function ToolDetailsScreen({ route, navigation }) {
  const [tool, setTool] = useState(route.params);
  const [removedVisible, setRemovedVisible] = useState(false);

  const handleStatus = async (tool) => {
    const result = await toolsApi.updateStatus(tool);

    const updatedTool = await toolsApi.getToolById(tool);
    setTool(updatedTool.data);
  };

  const handleDelete = async (tool) => {
    setRemovedVisible(true);
    const result = await toolsApi.deleteTool(tool);

    if (!result.ok) alert('Verktyg gick inte raderas.');
  };

  const handleDeleteButtonPress = (tool) => {
    Alert.alert(
      'Är du säkert?',
      `${tool.name} kommer att raderas, vill du forsätta?`,
      [
        { text: 'Nej' },
        {
          text: 'Radera',
          onPress: () => handleDelete(tool),
          style: 'destructive',
        },
      ]
    );
  };
  return (
    <Screen style={styles.screen}>
      <RemovedScreen
        visible={removedVisible}
        onDone={() => setRemovedVisible(false)}
      />
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
        {!tool.available ? (
          <AppButton
            title="Sätt som tillgängligt"
            color="green"
            onPress={() => handleStatus(tool)}
          />
        ) : null}
        <AppButton
          title="Regidera"
          onPress={() => {
            navigation.navigate('EditToolScreen', [tool]);
          }}
        />
        <AppButton
          title="Radera Verktyg"
          color="danger"
          onPress={() => handleDeleteButtonPress(tool)}
        />
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
