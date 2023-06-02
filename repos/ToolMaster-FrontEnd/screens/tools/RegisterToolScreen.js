import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
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
import { LanguageContext } from '../../language/languageContext';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  serieNumber: Yup.string().required(),
  toolGroup: Yup.object(),
});

const headingText = {
  en: 'Register tool',
  sv: 'Registrera verktyg',
  es: 'Registrar herramienta',
};

const buttonText = {
  en: 'Register new tool',
  sv: 'Registrera ny verktyg',
  es: 'Registrar nueva herramienta',
};

export default function RegisterToolScreen() {
  const { language, options, updateLanguage } = useContext(LanguageContext);

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
      <View style={styles.heading}>
        <AppText style={styles.headingText}>{headingText[language]}</AppText>
      </View>
      <View style={styles.formContainer}>
        <AppForm
          initialValues={{
            name: '',
            serieNumber: '',
            toolGroup: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
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
          <SubmitButton title={buttonText[language]} color="green" />
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    minHeight: '100%',
    backgroundColor: colors.white,
  },
  formContainer: {
    padding: 10,
  },
  heading: {
    backgroundColor: colors.yellow,
  },
  headingText: {
    color: colors.primary,
    textAlign: 'center',
    padding: 10,
    fontSize: 23,
  },
});
