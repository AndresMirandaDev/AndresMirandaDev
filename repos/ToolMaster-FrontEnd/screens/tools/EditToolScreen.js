import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as Yup from 'yup';

import Screen from '../../components/Screen';
import AppForm from '../../components/forms/AppForm';
import AppText from '../../components/AppText';
import AppFormField from '../../components/forms/AppFormField';
import SubmitButton from '../../components/SubmitButton';
import AppFormPicker from '../../components/forms/AppFormPicker';
import colors from '../../config/colors';

//dummy data

// const tool = {
//   name: 'hilti 1500',
//   id: 1,
//   serieNumber: 12345,
//   toolGroup: { name: 'asbestsanering', description: 'some description' },
//   project: { name: 'spiralen', projectNumber: 12333 },
//   available: true,
// };

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  serieNumber: Yup.string().required(),
  toolGroup: Yup.object(),
});

const toolGroups = [
  { name: 'asbest sanering', id: 5 },
  { name: 'bilmaskiner', id: 6 },
  { name: 'håltagning', id: 7 },
  { name: 'flexmaskiner', id: 8 },
];
//should take the tool from route params comming from the tool detalils screen in the edit button onpress function navigate implementation
export default function EditToolScreen({ route }) {
  const tool = route.params[0];
  console.log(tool);
  return (
    <Screen style={styles.screen}>
      <AppText style={styles.info}>Regiderar : {tool.name}</AppText>
      <AppText style={styles.info}>Serie Nummer : {tool.serieNumber}</AppText>
      <AppForm
        initialValues={{
          name: '',
          serieNumber: '',
          toolGroup: '',
        }}
        validationSchema={validationSchema}
      >
        <AppFormField name="name" icon="tools" placeholder={tool.name} />
        <AppFormField
          name="serieNumber"
          icon="identifier"
          placeholder={tool.serieNumber.toString()}
        />
        <AppFormPicker
          items={toolGroups}
          name="name"
          icon="select-group"
          placeholder={tool.toolGroup.name}
          width="60%"
        />
        <SubmitButton title="upppdatera " color="green" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primary,
    minHeight: '100%',
    padding: 7,
  },
  info: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    textTransform: 'capitalize',
    color: colors.light,
    fontSize: 20,
  },
});
