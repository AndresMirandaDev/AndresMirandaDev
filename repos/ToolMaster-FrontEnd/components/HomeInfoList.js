import { ImageBackground, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

import InfoCard from './InfoCard';
import useWeek from '../hooks/useWeek';

const projects = [
  { name: 'spiralen', projectNumber: 1111, active: true, id: 1 },
  { name: 'drakenberg', projectNumber: 3333, active: true, id: 2 },
  { name: 'tuben', projectNumber: 4444, active: true, id: 3 },
];

const rentedTools = [
  { name: 'hilti1500', rentedTo: 'global', id: 4 },
  { name: 'flex', rentedTo: 'hilti', id: 5 },
  { name: 'dianova', rentedTo: 'machinerent', id: 6 },
  { name: 'hilti 500', rentedTo: 'machinerent', id: 7 },
  { name: 'cobra', rentedTo: 'machinerent', id: 8 },
  { name: 'dammsugare', rentedTo: 'machinerent', id: 9 },
];

export default function HomeInfoList() {
  const week = useWeek();

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground
          source={require('../assets/background.jpg')}
          blurRadius={10}
        >
          <InfoCard infoToDisplay="Vecka" data={week} />
          <InfoCard infoToDisplay="Aktiv Projekt:" data={projects.length} />
          <InfoCard infoToDisplay="Hyrda maskiner:" data={rentedTools.length} />
        </ImageBackground>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
