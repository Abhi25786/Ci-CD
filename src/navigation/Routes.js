import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'
import IntroStack from './IntroStack'
const Route = () => {
  const introState = useSelector(state => state?.intro?.value)
  return (
    <NavigationContainer>
      {introState?IntroStack():AuthStack()}
    </NavigationContainer>
  )
}

export default Route

const styles = StyleSheet.create({})