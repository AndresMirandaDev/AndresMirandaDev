import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EditToolScreen from '../screens/tools/EditToolScreen';
import RegisterToolScreen from '../screens/tools/RegisterToolScreen';
import ToolListScreen from '../screens/tools/ToolListScreen';
import ToolsScreen from '../screens/tools/ToolsScreen';

const Stack = createNativeStackNavigator();

const ToolsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ presentation: 'modal', headerShown: false }}
    >
      <Stack.Screen name="ToolsScreen" component={ToolsScreen} />
      <Stack.Screen name="EditToolScreen" component={EditToolScreen} />
      <Stack.Screen name="RegisterToolScreen" component={RegisterToolScreen} />
      <Stack.Screen name="ToolListScreen" component={ToolListScreen} />
    </Stack.Navigator>
  );
};

export default ToolsNavigator;
