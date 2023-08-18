import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AccountScreen, HomeScreen, LoginScreen, SignUpScreen } from '../Screens';
import navigationStrings from './navigationStrings';
const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={AccountScreen}
        name={navigationStrings.ACCOUNTSCREEN}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
}
