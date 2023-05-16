import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Screen from '../../components/Screen';
import colors from '../../config/colors';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';
import rentedApi from '../../api/rented';
import returnsApi from '../../api/returns';
import UploadScreen from '../UploadScreen';

export default function RentedToolDetailsScreen({ route, navigation }) {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const tool = route.params;

  const rentStartDate = new Date(tool.rentStart);

  const handleReturn = async () => {
    setProgress(0);
    setUploadVisible(true);

    const newReturn = {
      tool: tool._id,
      rentStartDate: rentStartDate,
      rentCompany: tool.rentedTo,
    };

    const result = await returnsApi.addReturn(newReturn, (progress) => {
      setProgress(progress);
    });
    console.log(result);
    if (!result) {
      setUploadVisible(false);
      return alert('Det gick inte att registrera verktyg som återvänt.');
    }

    const deleteResult = await rentedApi.deleteRentedTool(tool);
  };

  const handleReturnButtonPress = () => {
    Alert.alert(
      'Återvända verktyg?',
      'Verktyg kommer att registrera som återvänt',
      [{ text: 'Nej' }, { text: 'Återvända', onPress: handleReturn }]
    );
  };
  return (
    <Screen style={styles.screen}>
      <UploadScreen
        progress={progress}
        visible={uploadVisible}
        onDone={() => {
          setUploadVisible(false);
          setTimeout(() => {
            navigation.navigate('RentedToolsScreen');
          }, 500);
        }}
      />
      <View style={styles.container}>
        <AppText style={styles.title}>{tool.name}</AppText>
      </View>
      <View style={styles.infoContainer}>
        <AppText style={styles.label}>Uthyrnings Företag</AppText>
        <AppText style={styles.info}>{tool.rentedTo}</AppText>
      </View>
      <View style={styles.infoContainer}>
        <AppText style={styles.label}>Nuvarande Projekt</AppText>
        <AppText style={styles.info}>{tool.project.name}</AppText>
      </View>

      <View style={styles.infoContainer}>
        <AppText style={styles.label}>Inhyrd Från - datum</AppText>
        <AppText style={styles.info}>
          {rentStartDate.toLocaleDateString()}
        </AppText>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          title="återvända verktyg"
          color="green"
          onPress={handleReturnButtonPress}
        />
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
