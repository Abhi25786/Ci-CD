import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoginScreen, SignUpScreen } from '../Screens';
import navigationStrings from './navigationStrings';
const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={LoginScreen}
        name={navigationStrings.LOGINSCREEN}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={SignUpScreen}
        name={navigationStrings.SIGNUPSCREEN}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
