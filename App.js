import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import Home from './src/Screen/Home/Home';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  
    // --------for splash hide
    useEffect(() => {
      setTimeout(() => {
        SplashScreen.hide();
      }, 800);
    }, []);
  

  return <Home />;
};

export default App;

const styles = StyleSheet.create({});
