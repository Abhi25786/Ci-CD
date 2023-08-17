import React, {memo} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import {moderateScale} from '../../styles/responsiveSize';

const TextInputComponent = ({
  leftImageSource,
  rightImageSource,
  onLeftImagePress,
  onRightImagePress,
  mainContaineStyle,
  secureTextEntry,
  textInputStyle,
  onLeftIconPress = () => {},
  onRightIconPress = () => { },
  leftImgeStyle,
  rightIconStyle,
  ...textInputProps
}) => {
  return (
    <View style={[styles.container, mainContaineStyle, {}]}>
      {leftImageSource && (
        <TouchableOpacity onPress={onLeftIconPress}>
          <Image
            source={leftImageSource}
            style={[styles.image,leftImgeStyle]}
            onPress={onLeftImagePress}
          />
        </TouchableOpacity>
      )}
      <TextInput
        style={[styles.textInput, textInputStyle]}
        {...textInputProps}
        secureTextEntry={secureTextEntry}
      />
      {rightImageSource && (
        <TouchableOpacity onPress={onRightIconPress}>
          <Image
            source={rightImageSource}
            style={[styles.image,rightIconStyle]}
            onPress={onRightImagePress}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(8),
    borderWidth: moderateScale(1),
    borderColor: '#ccc',
    paddingHorizontal: moderateScale(12),
  },
  image: {
    width: moderateScale(20),
    height: moderateScale(20),
    marginHorizontal: moderateScale(8),
  },
  textInput: {
    color: colors.white,
    flex: 1,
    fontFamily: fontFamily.muktaMedium,
  },
});

export default memo(TextInputComponent);
