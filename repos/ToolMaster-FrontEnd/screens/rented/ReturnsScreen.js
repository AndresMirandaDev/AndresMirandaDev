import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Screen from '../../components/Screen';
import { FlatList } from 'react-native-gesture-handler';
import ReturnListItem from '../../components/ReturnListItem';
import colors from '../../config/colors';
import ListItemSeparator from '../../components/ListItemSeparator';
import useApi from '../../hooks/useApi';
import returnsApi from '../../api/returns';
import AppActivityIndicator from '../../components/AppActivityIndicator';
import ConnectivityError from '../../components/ConnectivityError';

const testReturn = [
  {
    _id: '64630ba4bf1d58b5ef2f3668',
    tool: {
      _id: '64630485bf1d58b5ef2f3643',
      name: 'Dianova',
      rentedTo: 'Global',
      rentStart: '2023-05-16T04:20:08.250Z',
      project: {
        name: 'Tuben',
        projectNumber: 11123,
      },
    },
    rentStartDate: '2023-05-16T04:20:08.250Z',
    returnDate: '2023-05-16T04:50:44.903Z',
    rentCompany: 'Global',
  },
  {
    _id: '64630ba4bf1d58b5ef2f3633',
    tool: {
      _id: '64630485bf1d58b5ef2f3143',
      name: 'flex',
      rentedTo: 'Global',
      rentStart: '2023-05-16T04:20:08.250Z',
      project: {
        name: 'Spiralen',
        projectNumber: 11123,
      },
    },
    rentStartDate: '2023-05-16T04:20:08.250Z',
    returnDate: '2023-05-16T04:50:44.903Z',
    rentCompany: 'Global',
  },
];

export default function ReturnsScreen() {
  const {
    data: returns,
    loading,
    request: loadReturns,
    error,
  } = useApi(returnsApi.getReturns);

  useEffect(() => {
    loadReturns();
  }, []);

  return (
    <Screen style={styles.screen}>
      <AppActivityIndicator visible={loading} />
      {error && <ConnectivityError loadDataFunction={loadReturns} />}
      <FlatList
        data={returns}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return <ReturnListItem data={item} />;
        }}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    minHeight: '100%',
  },
});
