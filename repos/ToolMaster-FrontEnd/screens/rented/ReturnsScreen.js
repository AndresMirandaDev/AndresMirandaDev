import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../../components/Screen';
import { FlatList } from 'react-native-gesture-handler';
import ReturnListItem from '../../components/ReturnListItem';
import colors from '../../config/colors';

const testReturn = [
  {
    _id: '64630ba4bf1d58b5ef2f3668',
    tool: {
      _id: '64630485bf1d58b5ef2f3643',
      name: 'Dianova',
      rentedTo: 'Global',
      rentStart: '2023-05-16T04:20:08.250Z',
      project: '64630470bf1d58b5ef2f363e',
    },
    rentStartDate: '2023-05-16T04:20:08.250Z',
    returnDate: '2023-05-16T04:50:44.903Z',
    rentCompany: 'Global',
  },
];

export default function ReturnsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={testReturn}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return <ReturnListItem data={item} />;
        }}
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
