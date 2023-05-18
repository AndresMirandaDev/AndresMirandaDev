import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import usersApi from '../../api/users';
import useApi from '../../hooks/useApi';
import Screen from '../../components/Screen';
import colors from '../../config/colors';
import AppForm from '../../components/forms/AppForm';
import AppFormPicker from '../../components/forms/AppFormPicker';
import SubmitButton from '../../components/SubmitButton';

export default function SearchSalaryReportScreen() {
  const { data: users, request: loadUsers } = useApi(usersApi.getAllUsers);

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <AppForm
          initialValues={{
            user: '',
          }}
        >
          <AppFormPicker
            items={users}
            icon="text-account"
            placeholder="Välj jobbare för att visa rapporter"
          />
          <SubmitButton title="visa rapporter" />
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    minHeight: '100%',
  },
  container: {
    marginTop: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
