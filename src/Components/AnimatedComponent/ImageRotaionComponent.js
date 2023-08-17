import { StyleSheet, Text, View } from 'react-native'
import React, { memo, useEffect } from 'react'
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'
import { height, width } from '../../styles/responsiveSize'
import imagePath from '../../constants/imagePath'

const ImageRotaionComponent = ({ rotation = true ,imageStyle}) => {
    const progress = useSharedValue(0);

    useEffect(() => {
      progress.value = withRepeat(
        withTiming(1,{ duration: 7000,easing:Easing.linear}),
        -1,
      );
  
    }, []);
    const reanimatedStyle = useAnimatedStyle(() => {
      const rotate = interpolate(progress.value,[0,1],[0,360])
      return {
        transform: [{rotate: `${rotate}deg`}],
      };
    }, []);
  return (
    <Animated.Image
          source={imagePath.logo}
          style={[styles.imageStyle,!!rotation ?reanimatedStyle : null,imageStyle]}
          resizeMode="stretch"
        />
  )
}

export default memo(ImageRotaionComponent)

const styles = StyleSheet.create({
    imageStyle: {
        marginTop: height / 4,
        height:  width / 2,
        width: width / 2,
        resizeMode: 'cover',
        alignSelf:'center',
    }
})