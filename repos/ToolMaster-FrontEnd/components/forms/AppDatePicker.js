import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Screen from '../Screen';
import colors from '../../config/colors';
import { useFormikContext } from 'formik';
import AppText from '../AppText';

//still has to research about getting the date from the picker
export default function AppDatePicker({ name, placeholder }) {
  const [modalVisible, setModalVisible] = useState(false);

  const { setFieldValue, values } = useFormikContext();

  const setDate = (event, date) => {
    const {
      type,
      nativeEvent: { timestamp },
    } = event;
    console.log(event);
  };
  return (
    <Screen>
      <View style={styles.container}>
        <AppText></AppText>
        <Button
          title={placeholder}
          onPress={() => setModalVisible(true)}
          color={colors.medium}
        />
        <Modal visible={modalVisible} animationType="slide">
          <Screen>
            <DateTimePicker
              value={new Date()}
              display="spinner"
              onChange={setDate}
              mode="date"
            />
            <Button
              title="Sätt Start Datum"
              onPress={() => setModalVisible(false)}
              color={colors.green}
            />
            <Button
              title="Stäng"
              onPress={() => setModalVisible(false)}
              color={colors.danger}
            />
          </Screen>
        </Modal>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
