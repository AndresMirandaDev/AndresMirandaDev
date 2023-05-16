import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import colors from '../config/colors';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import AppButton from '../components/AppButton';

export default function EditUserInfoScreen({ route }) {
  const user = route.params;

  return (
    <Screen>
      <View style={styles.container}>
        <AppForm
          initialValues={{
            name: '',
            email: '',
            phone: '',
          }}
        >
          <AppFormField name="name" placeholder={user.name} icon="account" />
          <AppFormField name="email" placeholder={user.email} icon="email" />
          <AppFormField
            name="phone"
            placeholder={user.phone.toString()}
            icon="phone"
          />
          <View style={styles.button}>
            <AppButton title="uppdatera min information" color="green" />
          </View>
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    minHeight: '100%',
  },
  button: {
    marginTop: 50,
    padding: 10,
  },
});
