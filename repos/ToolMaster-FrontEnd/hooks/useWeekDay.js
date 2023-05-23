const weekday = [
  'Söndag',
  'Måndag',
  'Tisdag',
  'Onsdag',
  'Torsdag',
  'Fredag',
  'Lördag',
];

export default function useWeekDay(date) {
  const newDate = new Date(date);

  return weekday[newDate.getDay()];
}
