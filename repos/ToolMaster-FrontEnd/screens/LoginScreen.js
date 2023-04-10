import { StyleSheet, Image, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppForm from '../components/forms/AppForm';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/forms/AppFormField';
import colors from '../config/colors';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function LoginScreen() {
  const [loginFailed, setLoginFailed] = useState(true);
  const handleSubmit = () => {
    console.log('sbumitted');
  };
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
      blurRadius={6}
    >
      <Screen style={styles.container}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <AppForm
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error={'Invalid email and/or password'}
            visible={loginFailed}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            name="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="password"
            name="password"
            keyboardType="password"
            textContentType="password"
          />
          <SubmitButton title="login" />
        </AppForm>
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: colors.dark,
  },
  logo: {
    width: 200,
    height: 200,
    margin: 10,
  },
});
