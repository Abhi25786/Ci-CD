import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen, LoginScreen, SignUpScreen } from '../Screens';
import navigationStrings from './navigationStrings';
const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name={navigationStrings.HOMESCREEN}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
}
