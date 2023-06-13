import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../Screen';
import colors from '../../config/colors';

export default function YearMonthPicker() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Screen style={styles.screen}>
      <MaterialCommunityIcons name="calendar" />
      <View style={styles.container}>
        {modalVisible && (
          <View>
            <DatePicker mode="monthYear" />
          </View>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
  },
  container: {},
});
