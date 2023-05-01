import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ProjectsScreen from './screens/projects/ProjectsScreen';
import RegisterProjectScreen from './screens/projects/RegisterProjectScreen';
import SearchProjectScreen from './screens/projects/SearchProjectScreen';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import RegisterRentedTool from './screens/rented/RegisterRentedTool';
import DateTimePicker from '@react-native-community/datetimepicker';
import Screen from './components/Screen';
import { useState } from 'react';
import RentedToolsListScreen from './screens/rented/RentedToolsListScreen';
import ToolListScreen from './screens/tools/ToolListScreen';
import RentedToolDetailsScreen from './screens/rented/RentedToolDetailsScreen';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
