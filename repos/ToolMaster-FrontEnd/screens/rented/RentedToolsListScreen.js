import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Screen from '../../components/Screen';
import AppText from '../../components/AppText';

import RentedToolListItem from '../../components/RentedToolListItem';
import colors from '../../config/colors';
import rentedToolsApi from '../../api/rented';
import useApi from '../../hooks/useApi';
import AppActivityIndicator from '../../components/AppActivityIndicator';
import ConnectivityError from '../../components/ConnectivityError';
import AppButton from '../../components/AppButton';

const rentedTools = [
  {
    name: 'dianova',
    rentedTo: 'global',
    rentStart: new Date().toLocaleDateString(),
    id: 1,
  },
  {
    name: 'cobra',
    rentedTo: 'global',
    rentStart: new Date().toLocaleDateString(),
    id: 2,
  },
  {
    name: 'fräsmaskin',
    rentedTo: 'global',
    rentStart: new Date().toLocaleDateString(),
    id: 3,
  },
  {
    name: 'dammsugare liten',
    rentedTo: 'global',
    rentStart: new Date().toLocaleDateString(),
    id: 4,
  },
  {
    name: 'dammsugare',
    rentedTo: 'global',
    rentStart: new Date().toLocaleDateString(),
    id: 5,
  },
  {
    name: 'cobra',
    rentedTo: 'global',
    rentStart: new Date().toLocaleDateString(),
    id: 6,
  },
  {
    name: 'hilti 1500',
    rentedTo: 'global',
    rentStart: new Date().toLocaleDateString(),
    id: 7,
  },
  {
    name: 'flex',
    rentedTo: 'global',
    rentStart: new Date().toLocaleDateString(),
    id: 8,
  },
];

export default function RentedToolsListScreen({ navigation }) {
  const {
    data: rentedTools,
    request: loadRentedTools,
    error,
    loading,
    limitedData,
    loadMore,
  } = useApi(rentedToolsApi.getRentedTools);

  useEffect(() => {
    loadRentedTools();
  }, []);

  return (
    <Screen style={styles.container}>
      <AppActivityIndicator visible={loading} />
      {error && <ConnectivityError loadDataFunction={loadRentedTools} />}

      <View style={styles.listContainer}>
        <FlatList
          data={limitedData}
          renderItem={({ item }) => {
            return (
              <RentedToolListItem
                tool={item}
                onPress={() =>
                  navigation.navigate('RentedToolDetailsScreen', item)
                }
              />
            );
          }}
          keyExtractor={(item) => item._id}
          onScrollEndDrag={loadMore}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
  listContainer: {
    flex: 1,
    paddingBottom: 50,
  },
});
