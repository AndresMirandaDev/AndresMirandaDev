import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../../components/Screen';
import NavButton from '../../components/NavButton';
import colors from '../../config/colors';
import ListItemSeparator from '../../components/ListItemSeparator';

const toolsActions = [
  { title: 'Visa Projekt', path: 'somepath', icon: 'magnify' },
  { title: 'Ny Projekt', path: 'somepath1', icon: 'plus' },
  { title: 'Regidera Projekt', path: 'somepath2', icon: 'circle-edit-outline' },
];

export default function ProjectsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={toolsActions}
        keyExtractor={(item) => item.title}
        numColumns={1}
        renderItem={({ item }) => {
          return <NavButton icon={item.icon} title={item.title} />; //remember to pass onpress for navigation
        }}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.medium,
    minHeight: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
