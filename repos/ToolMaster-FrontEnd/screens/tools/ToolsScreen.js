import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../../components/Screen';
import NavButton from '../../components/NavButton';
import colors from '../../config/colors';
import ListItemSeparator from '../../components/ListItemSeparator';

const toolsActions = [
  { title: 'Sök verktyg', path: 'ToolListScreen', icon: 'magnify' },
  { title: 'Registrera verktyg', path: 'RegisterToolScreen', icon: 'plus' },
  {
    title: 'Regidera verktyg',
    path: 'SearchToolScreen',
    icon: 'circle-edit-outline',
  },
  {
    title: 'Verktygs Grupper',
    path: 'ToolGroupsScreen',
    icon: 'tools',
  },
];

export default function ToolsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={toolsActions}
        keyExtractor={(item) => item.title}
        numColumns={1}
        renderItem={({ item }) => {
          return (
            <NavButton
              icon={item.icon}
              title={item.title}
              onPress={() => navigation.navigate(item.path)}
            />
          ); //remember to pass onpress for navigation
        }}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primaryOpacity,
    minHeight: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
