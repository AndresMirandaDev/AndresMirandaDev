import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import colors from '../config/colors';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/SubmitButton';
import usersApi from '../api/users';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Namn'),
  email: Yup.string().required().label('Email'),
  password: Yup.string().label('Lösenord'),
  phone: Yup.number().label('Mobil nummer'),
});

export default function RegisterUserScreen() {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (user, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const newUser = {
      ...user,
    };
    newUser.phone = parseInt(user.phone);

    const result = await usersApi.addUser(newUser, (progress) => {
      setProgress(progress);
    });

    if (!result.ok) {
      setUploadVisible(false);
      alert('Det fick inte att registrera användare');
    }
    resetForm();
  };

  return (
    <Screen style={styles.screen}>
      <UploadScreen
        visible={uploadVisible}
        progress={progress}
        onDone={() => setUploadVisible(false)}
      />
      <AppForm
        initialValues={{
          name: '',
          email: '',
          password: '',
          phone: '',
        }}
        onSubmit={handleSubmit}
      >
        <AppFormField name="name" icon="account" placeholder="Namn" />
        <AppFormField name="email" icon="email" placeholder="Email" />
        <AppFormField name="password" icon="lock" placeholder="Lösenord" />
        <AppFormField name="phone" icon="phone" placeholder="Mobil Nummer" />
        <View style={styles.button}>
          <SubmitButton title="registrera" color="green" />
        </View>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    minHeight: '100%',
    backgroundColor: colors.white,
  },
  button: {
    padding: 10,
  },
});
