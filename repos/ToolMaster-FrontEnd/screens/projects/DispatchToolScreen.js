import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Screen from '../../components/Screen';
import AppText from '../../components/AppText';
import colors from '../../config/colors';
import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import SubmitButton from '../../components/SubmitButton';
import UploadScreen from '../UploadScreen';
import toolsApi from '../../api/tools';
import useApi from '../../hooks/useApi';

export default function DispatchToolScreen({ route }) {
  const project = route.params;
  const { data: tools, request: loadTools } = useApi(toolsApi.getTools);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    loadTools();
  }, []);

  const handleSubmit = async ({ serieNumber }) => {
    const toolToDispatch = tools.filter((tool) => {
      return tool.serieNumber === parseInt(serieNumber);
    });

    toolToDispatch[0].project = project._id;

    const result = await toolsApi.dispatchTool(toolToDispatch, (progress) => {
      setProgress(progress);
    });

    if (!result.ok) {
      setUploadVisible(false);
      alert('Det gick inte att avsända vertkyg');
    }
  };

  return (
    <Screen style={styles.screen}>
      <UploadScreen
        progress={progress}
        visible={uploadVisible}
        onDone={() => setUploadVisible(false)}
      />
      <AppText style={styles.text}>Avsända verktyg till {project.name}</AppText>
      <AppText>Fyll in verktygs serie nummer för avsändning</AppText>
      <AppForm
        initialValues={{
          serieNumber: '',
        }}
        onSubmit={handleSubmit}
      >
        <AppFormField
          name="serieNumber"
          icon="identifier"
          placeholder="Serie nummer"
        />
        <SubmitButton title="avsänd verktyg" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    minHeight: '100%',
    backgroundColor: colors.white,
    padding: 20,
  },

  text: {
    color: colors.primary,
    textAlign: 'center',
    padding: 10,
    fontSize: 23,
  },
});
