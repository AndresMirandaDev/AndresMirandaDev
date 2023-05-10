import { StyleSheet, ScrollView, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

import Screen from '../../components/Screen';
import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import AppFormPicker from '../../components/forms/AppFormPicker';
import SubmitButton from '../../components/SubmitButton';
import FormResetButton from '../../components/forms/FormResetButton';
import colors from '../../config/colors';
import AppDatePicker from '../../components/forms/AppDatePicker';
import useApi from '../../hooks/useApi';
import usersApi from '../../api/users';
import projectsApi from '../../api/projects';
import UploadScreen from '../UploadScreen';
import AppText from '../../components/AppText';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  address: Yup.string().required().label('Address'),
  projectNumber: Yup.string().required().label('Project Number'),
  supervisor: Yup.object(),
  startDate: Yup.date().required().label('Start date'),
  endDate: Yup.date().required().label('End date'),
});

export default function RegisterProjectScreen() {
  const { data: users, request: loadUsers } = useApi(usersApi.getAllUsers);

  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (project, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await projectsApi.addProject(project, (progress) => {
      setProgress(progress);
    });

    console.log(result);
    if (!result.ok) {
      setUploadVisible(false);
      alert('Det gick inte att registrera nya projektet.');
    }
    resetForm();
  };

  return (
    <ScrollView keyboardShouldPersistTaps="never" scrollEnabled={false}>
      <Screen style={styles.screen}>
        <UploadScreen
          visible={uploadVisible}
          progress={progress}
          onDone={() => setUploadVisible(false)}
        />
        <View style={styles.container}>
          <AppText style={styles.text}>Registrera ny Projekt</AppText>
          <AppForm
            initialValues={{
              name: '',
              address: '',
              projectNumber: '',
              supervisor: '',
              startDate: '',
              endDate: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
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
            <AppFormField
              icon="map-marker"
              name="address"
              placeholder="Address"
            />
            <AppFormPicker
              items={users}
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
        </View>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 100,
    minHeight: '100%',
    backgroundColor: colors.white,
  },
  buttonContainer: {
    margin: 10,
    marginTop: 50,
  },
  container: {
    backgroundColor: colors.white,
  },
  text: {
    color: colors.primary,
    textAlign: 'center',
    padding: 10,
    fontSize: 23,
  },
});
