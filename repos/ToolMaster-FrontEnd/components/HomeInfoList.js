import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';

import InfoCard from './InfoCard';
import DateInfoCard from './DateInfoCard';
import useApi from '../hooks/useApi';
import rentedApi from '../api/rented';
import toolsApi from '../api/tools';
import { useNavigation } from '@react-navigation/native';
import { LanguageContext } from '../language/languageContext';
import AppActivityIndicator from './AppActivityIndicator';

const rentedToolsText = {
  en: 'Rented tools',
  sv: 'Inhyrda verktyg',
  es: 'Herramientas alquiladas',
};
const toolsText = {
  en: 'Total registered tools',
  sv: 'Registrerade verktyg',
  es: 'Herramientas registradas',
};
const toolsInRepairText = {
  en: 'Tool in Reparation',
  sv: 'Verktyg på reparation',
  es: 'Herramientas en reparación',
};

export default function HomeInfoList() {
  const { language } = useContext(LanguageContext);
  const navigation = useNavigation();
  const [toolsInRepair, setToolsInRepair] = useState([]);

  const {
    data: tools,
    request: loadTools,
    loading: toolsLoading,
    error: toolsError,
  } = useApi(toolsApi.getTools);
  const {
    data: rentedTools,
    request: loadRentedTools,
    loading,
    error,
  } = useApi(rentedApi.getRentedTools);

  const loadInRepair = async () => {
    const result = toolsApi.getTools();
    const toolsInRepair = (await result).data.filter((tool) => {
      return tool.reparation === true;
    });

    setToolsInRepair(toolsInRepair);
  };

  useEffect(() => {
    loadRentedTools();
    loadTools();
    loadInRepair();
  }, []);

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <DateInfoCard />
          <View style={styles.infoContainer}>
            <AppActivityIndicator visible={loading} />
            <InfoCard
              infoToDisplay={rentedToolsText[language]}
              data={rentedTools.length}
              onPress={() => navigation.navigate('RentedToolsListScreen')}
              icon="tools"
            />
            <InfoCard
              infoToDisplay={toolsText[language]}
              data={tools.length}
              onPress={() => navigation.navigate('ToolListScreen')}
              icon="tools"
            />
            <InfoCard
              infoToDisplay={toolsInRepairText[language]}
              data={toolsInRepair.length}
              icon="wrench"
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
