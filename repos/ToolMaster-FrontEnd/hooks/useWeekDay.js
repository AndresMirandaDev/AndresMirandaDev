import { useContext } from 'react';
import { LanguageContext } from '../language/languageContext';

const weekday = {
  en: {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  },
  sv: {
    0: 'Söndag',
    1: 'Måndag',
    2: 'Tisdag',
    3: 'Onsdag',
    4: 'Torsdag',
    5: 'Fredag',
    6: 'Lördag',
  },
  es: {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Mieroles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
  },
};

export default function useWeekDay(date) {
  const { language, options, updateLanguage } = useContext(LanguageContext);
  const newDate = new Date(date);

  if (language && weekday[language]) {
    return weekday[language][newDate.getDay()];
  }

  // Return a default value or handle the error case as per your requirements
  return 'Language not supported';
}
