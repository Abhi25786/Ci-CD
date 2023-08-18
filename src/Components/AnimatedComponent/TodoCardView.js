import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import colors from '../../Styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../../Styles/responsiveSize';
import fontFamily from '../../Styles/fontFamily';
import moment from 'moment';

const TodoCardView = ({item, index, curIndex, onPress = () => {}}) => {
  console.log(curIndex, index, 'd');
  const animated = useSharedValue(0);
  const InputRange = [0, 1, 0];

  useEffect(() => {
    if (index == curIndex) {
      animated.value = withTiming(1);
      return;
    }
    animated.value = withTiming(0);
  }, [curIndex]);

  const viewStyle = useAnimatedStyle(() => {
    const hight = interpolate(
      animated?.value,
      InputRange,
      [item?.description?.length, 200, 100],
      Extrapolate.CLAMP,
    );
    const borderWidth = interpolate(
      animated?.value,
      InputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    return {
      height: hight,
      borderWidth,
    };
  });

  return (
    <TouchableOpacity
      style={[
        // viewStyle,
        {
          borderRadius: moderateScale(12),
          paddingHorizontal: moderateScale(10),
          paddingVertical: moderateScaleVertical(10),
          width: width - moderateScale(30),
          backgroundColor: colors.grayOpacity80,
          //   borderWidth: index == curIndex ? 1 : 0,
          borderColor: index == curIndex ? colors.white : colors.blackOpacity0,
          alignSelf: 'center',

          overflow: 'hidden',
          marginHorizontal: 20,
          //   flexWrap: 'wrap',
        },
      ]}
      onPress={onPress}
      activeOpacity={1}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={[
            {
              fontSize: textScale(20),
              fontFamily: fontFamily.muktaBold,
              color: colors.white,
              textTransform: 'capitalize',
            },
          ]}>
          {item?.name}
        </Text>

        <Text
          style={[
            {
              fontSize: textScale(16),
              fontFamily: fontFamily.muktaMedium,
              color: colors.white,
              textTransform: 'capitalize',
            },
          ]}>
          {moment(item?.time).format('D-MMM-Y')}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <Text
          style={[
            {
              fontSize: textScale(14),
              fontFamily: fontFamily.muktaMedium,
              color: colors.white,
              textTransform: 'capitalize',
            },
          ]}>
          {item?.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(TodoCardView);

const styles = StyleSheet.create({});
