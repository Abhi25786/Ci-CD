import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { IntroScreen } from '../Screens';
import navigationStrings from './navigationStrings';
const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={IntroScreen}
        name={navigationStrings.INTROSCREEN}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
