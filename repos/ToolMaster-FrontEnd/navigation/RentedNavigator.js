import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RentedToolsScreen from '../screens/rented/RentedToolsScreen';
import RegisterRentedTool from '../screens/rented/RegisterRentedTool';

const Stack = createNativeStackNavigator();

const RentedToolsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ presentation: 'modal', headerShown: false }}
    >
      <Stack.Screen name="RentedToolsScreen" component={RentedToolsScreen} />
      <Stack.Screen name="RegisterRentedTool" component={RegisterRentedTool} />
    </Stack.Navigator>
  );
};

export default RentedToolsNavigator;
