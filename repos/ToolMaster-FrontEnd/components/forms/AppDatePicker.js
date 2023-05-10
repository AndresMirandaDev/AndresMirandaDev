import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useFormikContext } from 'formik';

import Screen from '../Screen';
import colors from '../../config/colors';
import AppText from '../AppText';

export default function AppDatePicker({ name, placeholder }) {
  const { setFieldValue, values } = useFormikContext();

  const [modalVisible, setModalVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const setDate = (date) => {
    setFieldValue(name, date);
    setModalVisible(false);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <AppText>{placeholder}</AppText>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <AppText style={styles.date}>
            {values[name] ? values[name].toLocaleDateString() : 'Select Date'}
          </AppText>
        </TouchableOpacity>

        {modalVisible && (
          <View>
            <Screen>
              <DateTimePickerModal
                date={currentDate}
                mode="date"
                onConfirm={setDate}
                onCancel={() => setModalVisible(false)}
                isVisible={modalVisible}
              />
            </Screen>
          </View>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
  },
  date: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
