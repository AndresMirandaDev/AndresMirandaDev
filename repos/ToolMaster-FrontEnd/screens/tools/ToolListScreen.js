import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { LoadMoreFlatlist } from 'react-native-load-more-flatlist';
import Screen from '../../components/Screen';
import ToolListItem from '../../components/ToolListItem';
import colors from '../../config/colors';
import FilterBar from '../../components/FilterBar';
import useApi from '../../hooks/useApi';
import toolsApi from '../../api/tools';
import AppActivityIndicator from '../../components/AppActivityIndicator';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';

const tools = [
  {
    name: 'hilti 1500',
    id: 1,
    serieNumber: 12345,
    toolGroup: { name: 'asbestsanering', description: 'some description' },
    project: { name: 'spiralen', projectNumber: 12333 },
    available: true,
  },
  {
    name: 'hilti 500',
    serieNumber: 12345,
    toolGroup: { name: 'asbestsanering', description: 'some description' },
    project: null,
    available: false,
    id: 2,
  },
  {
    name: 'flex',
    serieNumber: 12345,
    toolGroup: { name: 'asbestsanering', description: 'some description' },
    project: { name: 'spiralen', projectNumber: 12333 },
    available: true,
    id: 3,
  },
  {
    name: 'dammsugare',
    serieNumber: 12345,
    toolGroup: { name: 'asbestsanering', description: 'some description' },
    project: { name: 'spiralen', projectNumber: 12333 },
    available: true,
    id: 4,
  },
  {
    name: 'dianova',
    serieNumber: 12345,
    toolGroup: { name: 'asbestsanering', description: 'some description' },
    project: { name: 'spiralen', projectNumber: 12333 },
    available: true,
    id: 5,
  },
];

export default function ToolListScreen({ navigation }) {
  const {
    data: tools,
    error,
    loading,
    request: loadTools,
  } = useApi(toolsApi.getTools);

  useEffect(() => {
    loadTools();
  }, []);

  const [listData, setListData] = useState(tools);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Screen style={styles.screen}>
      <AppActivityIndicator visible={loading} />
      {error && (
        <View style={styles.errorScreen}>
          <AppText>Data kunde inte hämtas.</AppText>
          <AppButton title="försök igen" onPress={loadTools} />
        </View>
      )}
      {!error && <FilterBar data={listData} setData={setListData} />}
      <FlatList
        data={tools}
        renderItem={({ item }) => {
          return (
            <ToolListItem
              tool={item}
              onPress={() => {
                navigation.navigate('ToolDetailsScreen', item);
              }}
            />
          );
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    minHeight: '100%',
    backgroundColor: colors.white,
  },
  errorScreen: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
