import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Screen from '../../components/Screen';
import ToolListItem from '../../components/ToolListItem';
import colors from '../../config/colors';
import FilterBar from '../../components/FilterBar';
import useApi from '../../hooks/useApi';
import toolsApi from '../../api/tools';
import AppActivityIndicator from '../../components/AppActivityIndicator';
import ConnectivityError from '../../components/ConnectivityError';
import ListItemSeparator from '../../components/ListItemSeparator';
import { useIsFocused } from '@react-navigation/native';

export default function ToolListScreen({ navigation }) {
  const {
    data: tools,
    error,
    loading,
    request: loadTools,
    limitedData,
    loadMore,
  } = useApi(toolsApi.getTools);
  const isFocused = useIsFocused();
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    if (isFocused) {
      loadTools();
      setFilteredData(null);
    }
  }, [isFocused]);

  return (
    <Screen style={styles.screen}>
      <AppActivityIndicator visible={loading} />
      {error && <ConnectivityError loadDataFunction={loadTools} />}
      {!error && <FilterBar data={tools} setData={setFilteredData} />}
      <View style={styles.listContainer}>
        <FlatList
          data={filteredData ? filteredData : limitedData}
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
          onScrollEndDrag={loadMore}
          ItemSeparatorComponent={<ListItemSeparator />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    minHeight: '100%',
    backgroundColor: colors.white,
  },
  listContainer: {
    flex: 1,
    paddingBottom: 50,
  },
});
