import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import Screen from '../../components/Screen';
import NavButton from '../../components/NavButton';
import colors from '../../config/colors';
import ListItemSeparator from '../../components/ListItemSeparator';

const menuButtons = [
  {
    title: 'Visa lön rapporter',
    path: 'SearchSalaryReportScreen',
    icon: 'magnify',
  },
  {
    title: 'Skicka lön rapport',
    path: 'NewSalaryReport',
    icon: 'file-send-outline',
  },
];

export default function SalaryReportsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={menuButtons}
        keyExtractor={(item) => item.title}
        numColumns={1}
        renderItem={({ item }) => {
          return (
            <NavButton
              icon={item.icon}
              title={item.title}
              onPress={() => navigation.navigate(item.path)}
            />
          ); //add onpress when the screens are made
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
