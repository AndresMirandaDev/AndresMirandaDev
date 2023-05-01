import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as Yup from 'yup';

import Screen from '../../components/Screen';
import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import AppFormPicker from '../../components/forms/AppFormPicker';
import SubmitButton from '../../components/SubmitButton';
import colors from '../../config/colors';
import AppText from '../../components/AppText';

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
    <Screen style={styles.screen}>
      <AppText style={styles.text}>Registrera Verktyg </AppText>
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
          name="serieNumber"
          placeholder="Serie Nummer"
        />
        <AppFormPicker
          items={toolGroups}
          icon="select-group"
          placeholder="Verktygs grupp"
          width="60%"
        />
        <SubmitButton title="Registrera ny verktyg" color="green" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 100,
    minHeight: '100%',
    backgroundColor: colors.white,
    padding: 10,
  },
  text: {
    color: colors.primary,
    textAlign: 'center',
    padding: 10,
    fontSize: 23,
  },
});
