import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import AppText from './AppText';
import colors from '../config/colors';
import AppButton from './AppButton';
import { LanguageContext } from '../language/languageContext';

const isAdminText = {
  en: {
    is: 'Administrator',
    not: 'Not Administrator',
  },
  sv: {
    is: 'Administratör',
    not: 'Inte Administratör',
  },
  es: {
    is: 'Administrador',
    not: 'No administrador',
  },
};

const buttonText = {
  en: {
    makeAdmin: 'give admin permission',
    cancelAdmin: 'Revoke admin permission',
  },
  sv: {
    makeAdmin: 'Ge admin behörigheter',
    cancelAdmin: 'Upphäva admin behörigheter',
  },
  es: {
    makeAdmin: 'Dar permisos de admin',
    cancelAdmin: 'Revocar permisos de admin',
  },
};

export default function UserListItem({ user, onPress }) {
  const { name, email, isAdmin } = user;
  const { language, options, updateLanguage } = useContext(LanguageContext);

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{name}</AppText>
      <AppText style={styles.text}>{email}</AppText>
      <AppText
        style={{
          color: isAdmin ? colors.green : colors.light,
          fontWeight: 600,
        }}
      >
        {isAdmin ? isAdminText[language]['is'] : isAdminText[language]['not']}
      </AppText>
      <AppButton
        title={
          isAdmin
            ? buttonText[language]['cancelAdmin']
            : buttonText[language]['makeAdmin']
        }
        color={isAdmin ? 'danger' : 'green'}
        onPress={onPress}
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
  },
  text: {
    textTransform: 'capitalize',
    color: colors.light,
  },
});
