import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './src/Main';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       {/* <Stack.Screen
        name='Login'
        component={Login}
       /> */}
       <Stack.Screen 
       name='Main'
       component={Main}
       />
     </Stack.Navigator>
   </NavigationContainer>
  );
}
