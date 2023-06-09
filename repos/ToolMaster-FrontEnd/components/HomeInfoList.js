import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useContext, useEffect } from 'react';

import InfoCard from './InfoCard';
import DateInfoCard from './DateInfoCard';
import useApi from '../hooks/useApi';
import rentedApi from '../api/rented';
import { useNavigation } from '@react-navigation/native';
import { LanguageContext } from '../language/languageContext';

const rentedToolsText = {
  en: 'Rented tools',
  sv: 'Inhyrda verktyg',
  es: 'Herramientas alquiladas',
};

export default function HomeInfoList() {
  const { language } = useContext(LanguageContext);

  const { data: rentedTools, request: loadRentedTools } = useApi(
    rentedApi.getRentedTools
  );
  const navigation = useNavigation();

  useEffect(() => {
    loadRentedTools();
  }, []);

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <DateInfoCard />
          <View style={styles.infoContainer}>
            <InfoCard
              infoToDisplay={rentedToolsText[language]}
              data={rentedTools.length}
              onPress={() => navigation.navigate('RentedToolsListScreen')}
              icon="tools"
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
