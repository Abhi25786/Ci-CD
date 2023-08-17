import React, {useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import Route from './src/navigation/Routes';
import {userDate} from './src/redux/actions/auth';
import {introStateUpdate} from './src/redux/actions/intro';
import store from './src/redux/store';
import colors from './src/styles/colors';
import {getItem} from './src/utils/utils';
import FlashMessage from 'react-native-flash-message';
const App = () => {
  // --------for splash hide
  useEffect(() => {
    getItem('intro').then(res => {
      if (res != undefined) {
        introStateUpdate(res);
      }
    });
    getItem('userData').then(res => {
      console.log(res, 'resresresres');
      if (res != undefined) {
        userDate(res);
      }
    });
    setTimeout(() => {
      SplashScreen.hide();
    }, 800);
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor={colors.theamColor}
      />

      <Provider store={store}>
        <Route />
      </Provider>
      <FlashMessage position="top" />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
