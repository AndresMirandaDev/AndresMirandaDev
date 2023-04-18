import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ToolsNavigator from '../navigation/ToolsNavigator';
import ProjectsScreen from '../screens/projects/ProjectsScreen';
import colors from '../config/colors';

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
        component={ProjectsScreen}
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
    </Tab.Navigator>
  );
}
