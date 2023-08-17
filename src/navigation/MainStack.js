import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {AccountScreen} from '../Screens';
import HomeStack from './HomeStack';
import navigationStrings from './navigationStrings';

const Tab = createBottomTabNavigator();
export default function () {
  return (
    <Tab.Navigator screenOptions={{}} >
      <Tab.Screen
        component={HomeStack}
        name={navigationStrings.HOMESTACK}
        options={{headerShown: false}}
      />
      <Tab.Screen
        component={AccountScreen}
        name={navigationStrings.ACCOUNTSCREEN}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
