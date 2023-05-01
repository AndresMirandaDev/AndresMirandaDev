import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Screen from '../../components/Screen';
import * as Yup from 'yup';

import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import SubmitButton from '../../components/SubmitButton';
import AppDatePicker from '../../components/forms/AppDatePicker';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  rentedTo: Yup.string().required(),
  rentStart: Yup.date().required().nullable(),
  rentEnd: Yup.date().nullable(),
});

export default function RegisterRentedTool() {
  return (
    <Screen style={styles.screen}>
      <AppForm
        validationSchema={validationSchema}
        initialValues={{
          name: '',
          rentedTo: '',
          rentStart: '',
          rentEnd: '',
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <AppFormField name="name" placeholder="Namn" icon="tools" />
        <AppFormField
          name="rentedTo"
          placeholder="Uthyrnings företag"
          icon="city"
        />

        <AppDatePicker name="rentStart" placeholder="Datum - från" />
        <AppDatePicker name="rentEnd" placeholder="Datum - till" />
        <SubmitButton title="Registrera hyrt verktyg" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    paddingTop: 100,
  },
});
