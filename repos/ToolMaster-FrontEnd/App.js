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
import { useCallback, useEffect, useState } from 'react';
import RentedToolsListScreen from './screens/rented/RentedToolsListScreen';
import ToolListScreen from './screens/tools/ToolListScreen';
import RentedToolDetailsScreen from './screens/rented/RentedToolDetailsScreen';
import AuthContext from './auth/context';
import authStorage from './auth/storage';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };
  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  useEffect(() => {
    try {
      restoreUser();
    } catch (error) {
      console.log(error);
    } finally {
      setIsReady(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
