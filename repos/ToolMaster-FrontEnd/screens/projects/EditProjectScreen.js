import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as Yup from 'yup';

import Screen from '../../components/Screen';
import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import AppText from '../../components/AppText';
import colors from '../../config/colors';
import SubmitButton from '../../components/SubmitButton';
import AppFormPicker from '../../components/forms/AppFormPicker';
import AppDatePicker from '../../components/forms/AppDatePicker';

const validationSchema = Yup.object().shape({
  project: Yup.object().required().label('projekt'),
});

const supervisors = [
  { name: 'Luis Bazan', id: 1 },
  { name: 'Roberto Diaz', id: 2 },
  { name: 'Eduardo Martinez', id: 3 },
];

export default function EditProjectScreen({ route }) {
  const project = route.params;

  return (
    <ScrollView keyboardShouldPersistTaps="never" bounces={false}>
      <Screen style={styles.screen}>
        <AppText style={styles.info}>Regiderar : {project.name}</AppText>
        <AppText style={styles.info}>
          Projekt Nummer : {project.projectNumber}
        </AppText>
        <AppForm
          initialValues={{
            name: project.name,
            address: project.address,
            startDate: project.startDate,
            endDate: project.endDate,
            projectNumber: project.projectNumber,
            supervisor: project.supervisor,
          }}
        >
          <AppText style={styles.label}>Namn</AppText>
          <AppFormField
            name="name"
            placeholder={project.name}
            icon="alphabetical-variant"
          />
          <AppText style={styles.label}>Address</AppText>
          <AppFormField
            name="address"
            placeholder={project.name}
            icon="map-marker"
          />
          <AppText style={styles.label}>Projekt Nummer</AppText>
          <AppFormField
            name="projectNumber"
            placeholder={project.projectNumber.toString()}
            icon="identifier"
          />
          <AppText style={styles.label}>Arbetsledare</AppText>
          <AppFormPicker
            items={supervisors}
            placeholder={project.supervisor.name}
            name="supervisor"
          />
          <AppText style={styles.label}>Start Datum</AppText>
          <AppDatePicker name="startDate" />
          <AppText style={styles.label}>Slut datum</AppText>
          <AppDatePicker name="endDate" />
          <SubmitButton title="uppdatera" color="green" />
        </AppForm>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    minHeight: '100%',
    backgroundColor: colors.white,
    paddingTop: 50,
  },
  label: {
    color: colors.medium,
    padding: 5,
  },
  info: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    textTransform: 'capitalize',
    color: colors.primary,
    fontSize: 20,
    margin: 5,
  },
});
