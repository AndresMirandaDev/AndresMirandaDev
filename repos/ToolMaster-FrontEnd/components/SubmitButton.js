import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppButton from './AppButton';
import { useFormikContext } from 'formik';
import colors from '../config/colors';

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}
