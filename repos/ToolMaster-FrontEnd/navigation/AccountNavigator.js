import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/AccountScreen';
import EditUserInfoScreen from '../screens/EditUserInfoScreen';
import colors from '../config/colors';
import ManagePermissionsScreen from '../screens/ManagePermissionsScreen';

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.primary,
      }}
    >
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditUserInfoScreen"
        component={EditUserInfoScreen}
        options={{ headerTitle: 'Regidera min information' }}
      />
      <Stack.Screen
        name="ManagePermissionsScreen"
        component={ManagePermissionsScreen}
        options={{ headerTitle: 'Regidera behörigheter' }}
      />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
