import { useContext } from 'react';
import { CurrentDateContext } from '../date/CurrentDateContext';

export default function useWeek() {
  const currentDate = useContext(CurrentDateContext);
  const year = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - year) / (24 * 60 * 60 * 1000));

  return Math.ceil((currentDate.getDay() + 1 + days) / 7);
}
