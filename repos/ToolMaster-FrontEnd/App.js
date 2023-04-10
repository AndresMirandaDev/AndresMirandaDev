import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppTextInput from './components/forms/AppTextInput';
import WelcomeScreen from './screens/WelcomeScreen';
import Screen from './components/Screen';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return <LoginScreen />;
}
