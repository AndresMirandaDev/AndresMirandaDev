import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

import Screen from '../../components/Screen';
import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import AppFormPicker from '../../components/forms/AppFormPicker';
import SubmitButton from '../../components/SubmitButton';
import colors from '../../config/colors';
import AppText from '../../components/AppText';
import useApi from '../../hooks/useApi';
import toolGroupsApi from '../../api/toolGroups';
import toolsApi from '../../api/tools';
import UploadScreen from '../UploadScreen';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  serieNumber: Yup.string().required(),
  toolGroup: Yup.object(),
});

//dummy data

export default function RegisterToolScreen() {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const {
    data: toolGroups,
    error,
    loading,
    request: loadToolGroups,
  } = useApi(toolGroupsApi.getToolGroups);

  useEffect(() => {
    loadToolGroups();
  }, []);

  const handleSubmit = async (tool, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const newTool = {
      name: tool.name,
      serieNumber: tool.serieNumber,
      toolGroup: tool.toolGroup._id,
    };
    const result = await toolsApi.addTool(newTool, (progress) => {
      setProgress(progress);
    });

    if (!result.ok) {
      setUploadVisible(false);
      return alert('Det gick inte att spara nya verktyg.');
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
      <AppText style={styles.text}>Registrera Verktyg </AppText>
      <AppForm
        initialValues={{
          name: '',
          serieNumber: '',
          toolGroup: '',
        }}
        onSubmit={handleSubmit}
      >
        <AppFormField icon="tools" name="name" placeholder="Namn" />
        <AppFormField
          icon="identifier"
          name="serieNumber"
          placeholder="Serie Nummer"
        />
        <AppFormPicker
          name="toolGroup"
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
