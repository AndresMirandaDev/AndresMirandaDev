import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../../components/Screen';
import NavButton from '../../components/NavButton';
import colors from '../../config/colors';
import ListItemSeparator from '../../components/ListItemSeparator';

const toolsActions = [
  { title: 'Visa alla', path: 'ToolListScreen', icon: 'magnify' },
  {
    title: 'Registrera hyrt verktyg',
    path: 'RegisterRentedTool',
    icon: 'plus',
  },
];

export default function RentedToolsScreen({ navigation }) {
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
          );
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
