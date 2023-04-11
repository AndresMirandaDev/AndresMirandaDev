import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import { LoadMoreFlatlist } from 'react-native-load-more-flatlist';
import Screen from '../components/Screen';
import ToolListItem from '../components/ToolListItem';
import colors from '../config/colors';
import FilterBar from '../components/FilterBar';

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

export default function ToolListScreen() {
  const [listData, setListData] = useState(tools);
  const [isLoading, setIsLoading] = useState(false);

  const onListEndReached = async () => {
    setIsLoading(true);
    await setTimeout(() => {
      setListData([...listData, ...tools]);
      setIsLoading(false);
    }, 2000);
  };
  return (
    <Screen style={styles.screen}>
      <FilterBar data={listData} setData={setListData} />
      <LoadMoreFlatlist
        data={tools}
        renderFlatlistItem={({ item }) => {
          return <ToolListItem tool={item} />;
        }}
        onListEndReached={onListEndReached}
        isLoading={isLoading}
        indicatorColor={colors.yellow}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    minHeight: '100%',
    backgroundColor: colors.primary,
  },
});
