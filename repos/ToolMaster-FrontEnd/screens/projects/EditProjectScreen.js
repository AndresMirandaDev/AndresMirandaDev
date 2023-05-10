import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

import Screen from '../../components/Screen';
import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import AppText from '../../components/AppText';
import colors from '../../config/colors';
import SubmitButton from '../../components/SubmitButton';
import AppFormPicker from '../../components/forms/AppFormPicker';
import AppDatePicker from '../../components/forms/AppDatePicker';
import useApi from '../../hooks/useApi';
import usersApi from '../../api/users';
import UploadScreen from '../UploadScreen';
import projectsApi from '../../api/projects';

const validationSchema = Yup.object().shape({
  project: Yup.object().required().label('projekt'),
});

export default function EditProjectScreen({ route }) {
  const project = route.params;

  const {
    data: users,
    error,
    loading,
    request: loadUsers,
  } = useApi(usersApi.getAllUsers);

  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (projectToUpdate) => {
    setProgress(0);
    setUploadVisible(true);

    const updatedProject = {
      _id: project._id,
      name: !projectToUpdate.name ? project.name : projectToUpdate.name,
      address: !projectToUpdate.address
        ? project.address
        : projectToUpdate.address,
      projectNumber: !projectToUpdate.projectNumber
        ? project.projectNumber
        : projectToUpdate.projectNumber,
      startDate: !projectToUpdate.startDate
        ? project.startDate
        : projectToUpdate.startDate,
      endDate: !projectToUpdate.endDate
        ? project.endDate
        : projectToUpdate.endDate,
    };

    if (projectToUpdate.supervisor === '' && project.supervisor === null) {
      updatedProject.supervisor = null;
    } else if (projectToUpdate.supervisor) {
      updatedProject.supervisor = projectToUpdate.supervisor._id;
    } else if (!projectToUpdate.supervisor && project.supervisor) {
      updatedProject.supervisor = project.supervisor._id;
    }

    const result = await projectsApi.updateProject(
      updatedProject,
      (progress) => {
        setProgress(progress);
      }
    );

    if (!result.ok) {
      setUploadVisible(false);
      alert('Projekt gick inte att uppdateras');
    }
  };

  return (
    <ScrollView keyboardShouldPersistTaps="never" bounces={false}>
      <Screen style={styles.screen}>
        <UploadScreen
          progress={progress}
          visible={uploadVisible}
          onDone={() => setUploadVisible(false)}
        />
        <AppText style={styles.info}>Regiderar : {project.name}</AppText>
        <AppText style={styles.info}>
          Projekt Nummer : {project.projectNumber}
        </AppText>
        <AppForm
          initialValues={{
            name: '',
            address: '',
            startDate: '',
            endDate: '',
            projectNumber: '',
            supervisor: '',
          }}
          onSubmit={handleSubmit}
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
            placeholder={project.address}
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
            items={users}
            placeholder={
              project.supervisor ? project.supervisor.name : 'Arbetsledare'
            }
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
