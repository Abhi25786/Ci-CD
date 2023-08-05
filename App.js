import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Route from './src/navigation/Routes';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import { getItem } from './src/utils/utils';
import { introStateUpdate } from './src/redux/actions/intro';
import { SafeAreaProvider } from 'react-native-safe-area-context';



const App = () => {
  // --------for splash hide
  useEffect(() => {
    getItem('intro').then((res) => {
      if(res != undefined){
        introStateUpdate(res)
      }
    })
    setTimeout(() => {
      SplashScreen.hide()
    }, 800);
  }, [])

  return (
    <SafeAreaProvider>
    <Provider store={store}>
      <Route/>
    </Provider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
