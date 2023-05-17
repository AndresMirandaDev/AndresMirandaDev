import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';

export default function ReturnListItem({ data }) {
  const navigation = useNavigation();

  const { tool, rentStartDate, returnDate, rentCompany } = data;

  const dateOfReturn = new Date(returnDate);
  const startDate = new Date(rentStartDate);
  return (
    <View style={styles.container}>
      <View>
        <AppText style={styles.toolName}>{tool.name}</AppText>
        <AppText style={styles.info}>Inhyrd till {tool.project.name}</AppText>
        <AppText style={styles.info}>
          Returnerat den {dateOfReturn.toLocaleDateString()}
        </AppText>
      </View>
      <View style={styles.icon}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('ReturnDetailsScreen', data);
          }}
        >
          <MaterialCommunityIcons
            name="chevron-right"
            size={35}
            color={colors.primaryOpacity}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toolName: {
    textTransform: 'capitalize',
    fontSize: 21,
    fontWeight: 'bold',
    color: colors.primary,
  },
  info: {
    color: colors.medium,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
