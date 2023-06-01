import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';

import AppText from './AppText';
import colors from '../config/colors';
import { Calendar } from 'react-native-calendars';
import useWeek from '../hooks/useWeek';
import useWeekDay from '../hooks/useWeekDay';
import { LanguageContext } from '../language/languageContext';

const todayText = {
  en: 'Today',
  sv: 'Idag',
  es: 'Hoy',
};

const weekText = {
  en: 'Week',
  sv: 'Vecka',
  es: 'Semana',
};

export default function DateInfoCard() {
  const { language, options, updateLanguage } = useContext(LanguageContext);
  const date = new Date();

  const week = useWeek();
  const weekDay = useWeekDay(date);

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>
        {todayText[language]} {weekDay}
      </AppText>
      <AppText>
        {weekText[language]} {week}
      </AppText>
      <Calendar showWeekNumbers={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20,
    margin: 20,
    shadowOpacity: 0.2,
    shadowColor: colors.dark,
    shadowOffset: { height: 10, width: 10 },
    shadowRadius: 12,
    borderRadius: 20,
    elevation: 12,
  },
  text: {
    fontSize: 20,
    color: colors.medium,
    fontWeight: 'bold',
  },
});
