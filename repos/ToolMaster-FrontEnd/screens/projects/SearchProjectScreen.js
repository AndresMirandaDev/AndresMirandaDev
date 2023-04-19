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

const validationSchema = Yup.object().shape({
  project: Yup.object().required().label('projekt'),
});

const projects = [
  {
    name: 'spiralen',
    address: 'uppmanargatan 25',
    projectNumber: 11111,
    active: true,
    supervisor: {
      name: 'chato luis',
      id: 1,
    },
    id: 1,
    startDate: '2/3/2023',
    endDate: '6/9/2025',
  },
  {
    name: 'drakenberg',
    address: 'drakenbergsgatan 5',
    projectNumber: 22222,
    active: true,
    supervisor: {
      name: 'Roberto diaz',
      id: 2,
    },
    id: 2,
    startDate: '2/3/2023',
    endDate: '6/9/2025',
  },
];

export default function SearchProjectScreen({ navigation }) {
  const handleSubmit = ({ project }) => {
    const result = projects.filter((p) => {
      return p.id === project.id;
    });

    if (result.length === 0) alert('Projekt hittades inte');

    navigation.navigate('ProjectInfoScreen', result);
  };
  return (
    <ScrollView keyboardShouldPersistTaps="never">
      <Screen style={styles.screen}>
        <View style={styles.container}>
          <AppText>Välj projekt att visa</AppText>
          <AppForm
            initialValues={{ project: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <AppFormPicker
              name="project"
              items={projects}
              placeholder="Välj Projekt"
            />
            <SubmitButton title="visa" />
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
    paddingTop: 50,
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
});
