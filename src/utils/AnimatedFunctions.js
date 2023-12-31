import { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated";

 
export const scaleAnimation = (animationValue, inputRange, outputRange) => {
  return useAnimatedStyle(() => {
    const scale = interpolate(
      animationValue.value,
      inputRange,
      outputRange,
      Extrapolate.CLAMP,
    );
    return {
      transform: [{ scale }],
    };
  },[animationValue]);
}
export const widthAnimation = (animationValue, inputRange, outputRange) => {
  return useAnimatedStyle(() => {
    const width = interpolate(
      animationValue.value,
      inputRange,
      outputRange,
      Extrapolate.CLAMP,
    );
    return {
      width,
    };
  },[animationValue]);
}

export const translateRightToLeft = (animationValue, inputRange, outputRange) => {
  return useAnimatedStyle(() => {
    const translateX = interpolate(
      animationValue.value,
      inputRange,
      outputRange,
      Extrapolate.CLAMP,
    );
    return {
      transform: [{translateX}],    };
  },[animationValue]);
}

