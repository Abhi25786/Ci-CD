import {Animated, Dimensions, Easing, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {styles} from './style';
import imagePath from '../../constants/imagePath';
import en from '../../constants/lang/en';
const Home = () => {
  const progress = useRef(new Animated.Value(0)).current;
  const leftToRightAnimation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(progress, {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  };
  useEffect(() => {
    startAnimation();
    Animated.timing(leftToRightAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Animated.Image
        source={imagePath.logo}
        style={styles.animatedImage(progress, leftToRightAnimation)}
      />
      {/* title view */}
      <Animated.Text style={styles.textanimtionStyle(leftToRightAnimation)}>
        {en.WELCOME_TO_OUR_TEAM}
      </Animated.Text>
    </View>
  );
};

export default Home;
