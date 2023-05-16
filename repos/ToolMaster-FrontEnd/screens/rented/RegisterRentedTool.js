import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Screen from '../../components/Screen';
import * as Yup from 'yup';

import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import SubmitButton from '../../components/SubmitButton';
import AppDatePicker from '../../components/forms/AppDatePicker';
import colors from '../../config/colors';
import rentedToolsApi from '../../api/rented';
import UploadScreen from '../UploadScreen';
import AppFormPicker from '../../components/forms/AppFormPicker';
import useApi from '../../hooks/useApi';
import projectsApi from '../../api/projects';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  rentedTo: Yup.string().required(),
  rentStart: Yup.date().required().nullable(),
  project: Yup.object().required(),
});

export default function RegisterRentedTool() {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const { data: projects, request: loadProjects } = useApi(
    projectsApi.getProjects
  );

  useEffect(() => {
    loadProjects();
  }, []);

  const handleSubmit = async (tool, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);

    const newRentedTool = {
      name: tool.name,
      rentStart: tool.rentStart,
      rentedTo: tool.rentedTo,
      project: tool.project._id,
    };

    const result = await rentedToolsApi.addRentedTool(
      newRentedTool,
      (progress) => {
        setProgress(progress);
      }
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert('Det gick inte att registrera ny hyrning');
    }
    resetForm();
  };

  return (
    <Screen style={styles.screen}>
      <UploadScreen
        progress={progress}
        visible={uploadVisible}
        onDone={() => setUploadVisible(false)}
      />
      <AppForm
        validationSchema={validationSchema}
        initialValues={{
          name: '',
          rentedTo: '',
          rentStart: '',
          project: '',
        }}
        onSubmit={handleSubmit}
      >
        <AppFormField name="name" placeholder="Namn" icon="tools" />
        <AppFormField
          name="rentedTo"
          placeholder="Uthyrnings företag"
          icon="city"
        />

        <AppFormPicker items={projects} placeholder="Projekt" name="project" />
        <AppDatePicker name="rentStart" placeholder="Datum - från" />
        <SubmitButton title="Registrera hyrt verktyg" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    paddingTop: 100,
    backgroundColor: colors.white,
  },
});
