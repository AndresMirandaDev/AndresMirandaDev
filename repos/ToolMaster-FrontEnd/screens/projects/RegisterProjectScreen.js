import { StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';

import Screen from '../../components/Screen';
import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import AppFormPicker from '../../components/forms/AppFormPicker';
import SubmitButton from '../../components/SubmitButton';
import FormResetButton from '../../components/forms/FormResetButton';
import colors from '../../config/colors';
import AppDatePicker from '../../components/forms/AppDatePicker';

const supervisors = [
  { name: 'Luis Bazan', id: 1 },
  { name: 'Roberto Diaz', id: 1 },
  { name: 'Eduardo Martinez', id: 1 },
];

export default function RegisterProjectScreen() {
  return (
    <ScrollView keyboardShouldPersistTaps="never" scrollEnabled={false}>
      <Screen style={styles.screen}>
        <AppForm
          initialValues={{
            name: '',
            address: '',
            projectNumber: '',
            supervisor: '',
            startDate: '',
            endDate: '',
          }}
        >
          <AppFormField
            icon="alphabetical-variant"
            name="name"
            placeholder="Namn"
          />
          <AppFormField
            icon="identifier"
            name="projectNumber"
            placeholder="Projekt Nummer"
          />
          <AppFormPicker
            items={supervisors}
            placeholder="Arbetsledare"
            name="supervisor"
          />
          <AppDatePicker placeholder="Start datum" name="startDate" />
          <AppDatePicker placeholder="Slut datum" name="endDate" />

          <View style={styles.buttonContainer}>
            <SubmitButton title="Registrera ny projekt" />
            <FormResetButton title="reset" color="secondary" />
          </View>
        </AppForm>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 100,
    minHeight: '100%',
  },
  buttonContainer: {
    margin: 10,
    marginTop: 50,
  },
});
