import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SalaryReportsScreen from '../screens/salaryReports/SalaryReportsScreen';
import SearchSalaryReportScreen from '../screens/salaryReports/SearchSalaryReportScreen';
import UserSalaryReportsScreen from '../screens/salaryReports/UserSalaryReportsScreen';
import ReportDetailsScreen from '../screens/salaryReports/ReportDetailsScreen';
import NewSalaryReport from '../screens/salaryReports/NewSalaryReport';

const Stack = createNativeStackNavigator();

const SalaryReportsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SalaryReportsScreen"
        component={SalaryReportsScreen}
      />
      <Stack.Screen
        name="SearchSalaryReportScreen"
        component={SearchSalaryReportScreen}
      />
      <Stack.Screen
        name="UserSalaryReportsScreen"
        component={UserSalaryReportsScreen}
      />
      <Stack.Screen
        name="ReportDetailsScreen"
        component={ReportDetailsScreen}
      />
      <Stack.Screen name="NewSalaryReport" component={NewSalaryReport} />
    </Stack.Navigator>
  );
};

export default SalaryReportsNavigator;
