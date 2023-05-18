import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ToolsNavigator from '../navigation/ToolsNavigator';
import ProjectsNavigator from '../navigation/ProjectsNavigator';
import colors from '../config/colors';
import RentedToolsScreen from '../screens/rented/RentedToolsScreen';
import RentedToolsNavigator from './RentedNavigator';
import AccountScreen from '../screens/AccountScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AccountNavigator from './AccountNavigator';
import SalaryReportsNavigator from './SalaryReportsNavigator';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Hem"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            );
          },
          tabBarActiveTintColor: colors.primary,
        }}
      />
      <Tab.Screen
        name="Verktyg"
        component={ToolsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons name="tools" size={size} color={color} />
            );
          },
          tabBarActiveTintColor: colors.primary,
        }}
      />
      <Tab.Screen
        name="Projekt"
        component={ProjectsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="office-building-outline"
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: colors.primary,
        }}
      />
      <Tab.Screen
        name="Hyrda Verktyg"
        component={RentedToolsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="calendar-alert"
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: colors.primary,
        }}
      />
      <Tab.Screen
        name="Lõn rapport"
        component={SalaryReportsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="file-sign"
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: colors.primary,
        }}
      />
      <Tab.Screen
        name="Min konto"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: colors.primary,
        }}
      />
    </Tab.Navigator>
  );
}
