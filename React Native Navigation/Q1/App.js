import React from 'react';
import Home from './Screens/Home';
import Display from './Screens/Display';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="Display" component={Display} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


