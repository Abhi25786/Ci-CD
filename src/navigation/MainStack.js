import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Text} from 'react-native';
import BottomBarCustom from '../Components/BottomBar/BottomBarCustom';
import imagePath from '../constants/imagePath';
import en from '../constants/lang/en';
import {AccountScreen} from '../Screens';
import AccountStack from './AccountStack';
import HomeStack from './HomeStack';
import navigationStrings from './navigationStrings';
import WriteStack from './WriteStack';
const Tab = createBottomTabNavigator();
export default function () {
  return (
    <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: true }} tabBar={props => <BottomBarCustom {...props} />}>
      <Tab.Screen
        component={HomeStack}
        name={navigationStrings.HOMESTACK}
        options={{
          headerShown: false,
          tabBarIcon: imagePath.todoList,
          tabBarLabel: en.TODO_LIST,
        }}
      />
      <Tab.Screen
        component={WriteStack}
        name={navigationStrings.WRITETODOSTACK}
        options={{
          headerShown: false,
          tabBarIcon: imagePath.writeTodo,
          tabBarLabel: en.WRITE_TODO,
        }}
      />
      <Tab.Screen
        component={AccountStack}
        name={navigationStrings.ACCOUNTSTACK}
        options={{
          headerShown: false,
          tabBarIcon: imagePath.account,
          tabBarLabel:en.PROFILE,
        }}
      />
    </Tab.Navigator>
  );
}
