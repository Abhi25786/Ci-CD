import React, { memo } from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';
import colors from '../../Styles/colors';
import {moderateScale} from '../../Styles/responsiveSize';

const TextInputComponent = ({
  leftImageSource,
  rightImageSource,
  onLeftImagePress,
    onRightImagePress,
    mainContaineStyle,
  ...textInputProps
}) => {
  return (
    <View style={[styles.container,mainContaineStyle,{}]}>
      {leftImageSource && (
        <Image
          source={leftImageSource}
          style={styles.image}
          onPress={onLeftImagePress}
        />
      )}
      <TextInput style={styles.textInput} {...textInputProps}   />
      {rightImageSource && (
        <Image
          source={rightImageSource}
          style={styles.image}
          onPress={onRightImagePress}
        />
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
      flex:1
  },
});

export default memo(TextInputComponent);
