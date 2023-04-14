import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import AppFormPicker from '../components/forms/AppFormPicker';
import SubmitButton from '../components/SubmitButton';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  serieNumber: Yup.string().required(),
  toolGroup: Yup.object(),
});

//dummy data

const toolGroups = [
  { name: 'asbest sanering', id: 5 },
  { name: 'bilmaskiner', id: 6 },
  { name: 'håltagning', id: 7 },
  { name: 'flexmaskiner', id: 8 },
];
export default function RegisterToolScreen() {
  return (
    <ScrollView keyboardShouldPersistTaps="never" scrollEnabled={false}>
      <Screen style={styles.screen}>
        <AppForm
          initialValues={{
            name: '',
            serieNumber: '',
            toolGroup: '',
          }}
        >
          <AppFormField icon="tools" name="name" placeholder="Namn" />
          <AppFormField
            icon="identifier"
            name="name"
            placeholder="Serie Nummer"
          />
          <AppFormPicker
            items={toolGroups}
            icon="select-group"
            placeholder="Verktygs grupp"
            width="50%"
          />
          <SubmitButton title="Register new tool" />
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
});
