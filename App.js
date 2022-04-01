import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/Login'

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen
        name='Login'
        component={Login}
       />
     </Stack.Navigator>
   </NavigationContainer>
  );
}
