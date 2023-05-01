import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

import InfoCard from './InfoCard';
import DateInfoCard from './DateInfoCard';

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
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <DateInfoCard />
          <View style={styles.infoContainer}>
            <InfoCard infoToDisplay="Aktiva Projekt:" data={projects.length} />
            <InfoCard
              infoToDisplay="Hyrda verktyg:"
              data={rentedTools.length}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    padding: 10,
  },
  infoContainer: {
    justifyContent: 'space-around',
  },
});
