import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import salaryreportsApi from '../../api/salaryreports';
import useApi from '../../hooks/useApi';
import Screen from '../../components/Screen';
import colors from '../../config/colors';
import AppText from '../../components/AppText';
import SalaryReportListItem from '../../components/SalaryReportListItem';

export default function UserSalaryReportsScreen({ route }) {
  const user = route.params.user;
  const reports = route.params.reports;

  return (
    <Screen style={styles.screen}>
      <View style={styles.headerContainer}>
        <AppText style={styles.header}>{user.name} lön rapporter</AppText>
      </View>
      <View>
        <FlatList
          data={reports}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return <SalaryReportListItem report={item} />;
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    minHeight: '100%',
  },
  headerContainer: {
    backgroundColor: colors.white,
    padding: 20,
  },
  header: {
    fontSize: 25,
    textTransform: 'capitalize',
    color: colors.primaryOpacity,
    fontWeight: 800,
    textAlign: 'center',
  },
});
