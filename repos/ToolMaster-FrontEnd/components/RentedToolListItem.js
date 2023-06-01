import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useContext } from 'react';
import AppText from './AppText';
import colors from '../config/colors';
import { LanguageContext } from '../language/languageContext';

const rentedCompanyText = {
  en: 'Rent Company',
  sv: 'Uthyrnings företag',
  es: 'Empresa de arriendo',
};

const rentedFromText = {
  en: 'Rented from',
  sv: 'Inhyrd från den',
  es: 'Arriendo desde el',
};
export default function RentedToolListItem({ tool, onPress }) {
  const { language, options, updateLanguage } = useContext(LanguageContext);
  const { name, rentedTo, rentStart } = tool;

  //converting the date string to a date object so its possible to display locale date string
  const startDate = new Date(rentStart);
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.card}>
          <AppText style={styles.toolName}>{name}</AppText>
          <AppText style={styles.info}>
            {rentedCompanyText[language]} : {rentedTo}
          </AppText>
          <AppText style={styles.info}>
            {rentedFromText[language]}: {startDate.toLocaleDateString()}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    backgroundColor: colors.light,
    width: '100%',
    padding: 20,
    borderRadius: 15,
    elevation: 8,
    shadowOffset: { height: 10, width: 10 },
    shadowColor: colors.medium,
    shadowOpacity: 0.1,
  },
  toolName: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '800',
    color: colors.primaryOpacity,
    textTransform: 'capitalize',
  },
  info: {
    textTransform: 'capitalize',
    color: colors.medium,
    padding: 5,
  },
  status: {
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
});
