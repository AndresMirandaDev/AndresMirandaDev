import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import { useContext, useEffect, useState } from 'react';
import AuthContext from './auth/context';
import authStorage from './auth/storage';
import * as SplashScreen from 'expo-splash-screen';
import { LanguageContext, LanguageProvider } from './language/languageContext';
import {
  CurrentDateContext,
  CurrentDateProvider,
} from './date/CurrentDateContext';
import AppInitialize from './initialize';

export default function App() {
  return (
    <LanguageProvider>
      <AppInitialize />
    </LanguageProvider>
  );
}
