import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../../Styles/colors';
import fontFamily from '../../Styles/fontFamily';
import {height, moderateScale} from '../../Styles/responsiveSize';

const MultipalLineTextInput = ({
  mainContainerStyle,
  textInputStyle,
  ...textInputProps
}) => {

  return (
    <View style={[styles.container, mainContainerStyle]}>
      <TextInput
        multiline
        style={[styles.textInput, textInputStyle]}
        textAlignVertical="top"
        {...textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(12),
    height: height / 2,
    backgroundColor: colors.grayOpacity80,
  },
  textInput: {
    color: colors.white,
    fontFamily: fontFamily.muktaMedium,
    fontSize: moderateScale(16),
    height: '100%',
    width: '100%',
    padding: moderateScale(10),
  },
});

export default MultipalLineTextInput;
