import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ProjectsScreen from './screens/projects/ProjectsScreen';
import RegisterProjectScreen from './screens/projects/RegisterProjectScreen';
import SearchProjectScreen from './screens/projects/SearchProjectScreen';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
