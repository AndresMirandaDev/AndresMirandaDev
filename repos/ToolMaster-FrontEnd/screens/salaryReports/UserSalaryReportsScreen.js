import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';

import salaryreportsApi from '../../api/salaryreports';
import useApi from '../../hooks/useApi';
import Screen from '../../components/Screen';
import colors from '../../config/colors';
import AppText from '../../components/AppText';
import SalaryReportListItem from '../../components/SalaryReportListItem';
import ListItemSeparator from '../../components/ListItemSeparator';
import AppDatePicker from '../../components/forms/AppDatePicker';
import AppForm from '../../components/forms/AppForm';
import { LanguageContext } from '../../language/languageContext';
import appStyles from '../../config/styles';

const headingText = {
  en: 'salary reports',
  sv: 'lön rapporter',
  es: 'Reportes salariales de',
};

export default function UserSalaryReportsScreen({ route, navigation }) {
  const { language } = useContext(LanguageContext);

  const user = route.params.user;
  const reports = route.params.reports;

  return (
    <Screen style={styles.screen}>
      <View style={appStyles.heading}>
        {language === 'en' || language === 'sv' ? (
          <AppText style={appStyles.headingText}>
            {user.name} {headingText[language]}
          </AppText>
        ) : (
          <AppText style={appStyles.headingText}>
            {headingText[language]} {user.name}
          </AppText>
        )}
      </View>
      <AppForm
        initialValues={{
          year: '',
        }}
      >
        <AppDatePicker name="year" placeholder="Select Year" mode="year" />
      </AppForm>
      <View style={{ flex: 1, paddingBottom: 50 }}>
        <FlatList
          data={reports}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <SalaryReportListItem
                report={item}
                onPress={() => navigation.navigate('ReportDetailsScreen', item)}
              />
            );
          }}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primaryOpacity,
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
