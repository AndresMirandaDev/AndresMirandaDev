import { StyleSheet, ScrollView, View, Alert } from 'react-native';
import React, { useEffect } from 'react';
import * as Yup from 'yup';

import Screen from '../../components/Screen';
import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import AppText from '../../components/AppText';
import SubmitButton from '../../components/SubmitButton';
import colors from '../../config/colors';
import toolsApi from '../../api/tools';

const validationSchema = Yup.object().shape({
  serieNumber: Yup.string().required().label('serie nummer'),
});

// const tools = [
//   {
//     name: 'hilti 1500',
//     id: 1,
//     serieNumber: 12345,
//     toolGroup: { name: 'asbestsanering', description: 'some description' },
//     project: { name: 'spiralen', projectNumber: 12333 },
//     available: true,
//   },
//   {
//     name: 'flex',
//     id: 2,
//     serieNumber: 45678,
//     toolGroup: { name: 'asbestsanering', description: 'some description' },
//     project: { name: 'spiralen', projectNumber: 12333 },
//     available: true,
//   },
// ];

export default function SearchToolScreen({ navigation }) {
  const {
    data: tools,
    error,
    loading,
    request: loadTools,
  } = useApi(toolsApi.getTools);

  useEffect(() => {
    loadTools();
  }, []);

  const handleSubmit = ({ serieNumber }) => {
    const tool = tools.filter((tool) => {
      return tool.serieNumber === parseInt(serieNumber);
    });
    if (tool.length === 0) return alert('No tool was found');

    navigation.navigate('EditToolScreen', tool);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="never">
      <Screen style={styles.screen}>
        <View style={styles.heading}>
          <AppText style={styles.headingText}>Regidera verktyg</AppText>
        </View>
        <View style={styles.container}>
          <AppText>Ange Serie Nummer</AppText>
          <AppForm
            initialValues={{ serieNumber: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <AppFormField
              name="serieNumber"
              placeholder="Serie Nummer"
              icon="identifier"
              keyboardType="numeric"
            />
            <SubmitButton title="search" />
          </AppForm>
        </View>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    minHeight: '100%',
    backgroundColor: colors.light,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    shadowOffset: { height: 20, width: 10 },
    shadowColor: colors.dark,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 30,
  },
  heading: {
    backgroundColor: colors.yellow,
    padding: 10,
  },
  headingText: {
    color: colors.primaryOpacity,
    textAlign: 'center',
    fontSize: 25,
  },
});
