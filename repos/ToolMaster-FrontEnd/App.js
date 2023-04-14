import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppTextInput from './components/forms/AppTextInput';
import WelcomeScreen from './screens/WelcomeScreen';
import Screen from './components/Screen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ToolsScreen from './screens/ToolsScreen';
import ToolListScreen from './screens/ToolListScreen';
import RegisterToolScreen from './screens/RegisterToolScreen';
import ToolDetailsScreen from './screens/ToolDetailsScreen';
import EditToolScreen from './screens/EditToolScreen';

export default function App() {
  return <EditToolScreen />;
}
