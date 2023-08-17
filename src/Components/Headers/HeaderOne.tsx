import {StyleSheet, Text, View} from 'react-native';
import React, {FC, memo} from 'react';
import {height, moderateScale} from '../../styles/responsiveSize';
import { useNavigation } from '@react-navigation/native';

type headerPropes = {
  headerStyle: object;
  leftIcon: any;
  centerIcon: any;
  righrtIcon: any;
  leftIconViewStyle: Object;
  centerIconViewStyle: Object;
  rightIconViewStyle: Object;
};
const HeaderOne: FC<headerPropes> = ({
  headerStyle,
  leftIcon = () => {},
  centerIcon = () => {},
  righrtIcon = () => {},
  leftIconViewStyle,
  centerIconViewStyle,
  rightIconViewStyle,
}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        ...styles.headerStaticStyle,
        ...headerStyle,
      }}>
      <View style={{flex: 0.15, ...leftIconViewStyle}}>{leftIcon()}</View>
      <View style={{flex: 0.7, ...centerIconViewStyle}}>{centerIcon()}</View>
      <View style={{flex: 0.15, ...rightIconViewStyle}}>{righrtIcon()}</View>
    </View>
  );
};

export default memo(HeaderOne);

const styles = StyleSheet.create({
  headerStaticStyle: {
    flexDirection: 'row',
    height: height / moderateScale(16),
  },
});
