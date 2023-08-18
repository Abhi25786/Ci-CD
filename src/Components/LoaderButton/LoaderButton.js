import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo} from 'react';
import colors from '../../Styles/colors';
import {height, moderateScale, textScale} from '../../Styles/responsiveSize';
import fontFamily from '../../Styles/fontFamily';
import LinearGradient from 'react-native-linear-gradient';

const LoaderButton = ({
  buttonViewStyle,
  buttonText,
  bottonTextStyle,
  loaderVisibal = false,
  onPress = () => {},
  ...ButtonProps
}) => {
  return (
    <TouchableOpacity
      // style={[styles.container, buttonViewStyle]}
      {...ButtonProps}
      onPress={onPress}>
      <LinearGradient
        colors={[colors.purple, colors.purple]}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        style={[styles.container, buttonViewStyle]}>
        {loaderVisibal ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          <Text style={[styles.textStyle, bottonTextStyle]}>{buttonText}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default memo(LoaderButton);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    // borderWidth: moderateScale(1),

    height: height / moderateScale(16),
    paddingHorizontal: moderateScale(12),
  },
  textStyle: {
    fontFamily: fontFamily.muktaBold,
    fontSize: textScale(16),
    color: colors.white,
  },
});
