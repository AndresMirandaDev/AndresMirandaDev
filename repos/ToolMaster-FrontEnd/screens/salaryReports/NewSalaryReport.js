import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import Screen from '../../components/Screen';

import colors from '../../config/colors';
import AppFormField from '../../components/forms/AppFormField';
import AppForm from '../../components/forms/AppForm';
import AppDatePicker from '../../components/forms/AppDatePicker';
import useAuth from '../../auth/useAuth';
import AuthContext from '../../auth/context';
import AppText from '../../components/AppText';
import useMonth from '../../hooks/useMonth';
import AppButton from '../../components/AppButton';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import WorkDayListItem from '../../components/reports/WorkDayListItem';
import WorkDayFormInput from '../../components/reports/WorkDayFormInput';
import SubmitButton from '../../components/SubmitButton';

export default function NewSalaryReport() {
  const auth = useAuth(AuthContext);
  const { user } = auth;
  const month = useMonth(new Date());

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.heading}>
          <AppText style={styles.headingText}>
            Skicka in rapport för {month}
          </AppText>
        </View>
        <AppForm
          initialValues={{
            worker: user,
            date: new Date(),
            workDays: [],
          }}
          onSubmit={handleSubmit}
        >
          <WorkDayFormInput name="workDays" />
          <SubmitButton title="Skicka in rapport" color="green" />
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primaryOpacity,
  },
  container: {
    backgroundColor: colors.white,
    minHeight: '100%',
  },
  headingText: {
    fontSize: 25,
    color: colors.primaryOpacity,
    textAlign: 'center',
    padding: 10,
  },
});
