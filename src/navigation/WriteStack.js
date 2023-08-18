import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoginScreen, SignUpScreen, WriteTodoScreen } from '../Screens';
import navigationStrings from './navigationStrings';
const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Stack.Navigator screenOptions={{animation:'slide_from_right'}}>
      <Stack.Screen
        component={WriteTodoScreen}
        name={navigationStrings.WRITETODOSCREEN}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
