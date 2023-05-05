import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from './AppText';
import colors from '../config/colors';
import AppButton from './AppButton';

export default function UserListItem({ user, style }) {
  const { name, email, isAdmin } = user;
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{name}</AppText>
      <AppText style={styles.text}>{email}</AppText>
      <AppText
        style={{
          color: isAdmin ? colors.green : colors.dark,
          fontWeight: 600,
        }}
      >
        {isAdmin ? 'Administratör' : 'Inte Administratör'}
      </AppText>
      <AppButton
        title={isAdmin ? 'avbryta administratör' : 'göra administratör'}
        color={isAdmin ? 'danger' : 'green'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryOpacity,
    margin: 10,
    borderRadius: 15,
  },
  text: {
    textTransform: 'capitalize',
    color: colors.light,
  },
});
