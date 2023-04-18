import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as Yup from 'yup';

import Screen from '../../components/Screen';
import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import AppText from '../../components/AppText';
import colors from '../../config/colors';
import SubmitButton from '../../components/SubmitButton';

const validationSchema = Yup.object().shape({
  projectNumber: Yup.string().required().label('projekt nummer'),
});

export default function SearchProjectScreen() {
  return (
    <ScrollView keyboardShouldPersistTaps="never">
      <Screen style={styles.screen}>
        <View style={styles.container}>
          <AppText>Ange Projekt Nummer</AppText>
          <AppForm
            initialValues={{ projectNumber: '' }}
            validationSchema={validationSchema}
          >
            <AppFormField
              name="projectNumber"
              placeholder="Projekt Nummer"
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
    paddingTop: 50,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 30,
    shadowOffset: { height: 20, width: 10 },
    shadowColor: colors.dark,
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 30,
  },
});
