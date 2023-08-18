import {TabActions, useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../Styles/colors';
import fontFamily from '../../Styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../../Styles/responsiveSize';

const BottomBarCustom = ({state, descriptors}) => {
  const navigation = useNavigation();

  const navigateToScreen = index => {
    const tabAction = TabActions.jumpTo(state.routes[index].name);
    navigation.dispatch(tabAction);
  };

  return (
    <View style={{backgroundColor: colors.blackOpacity86}}>
      <View style={styles.tabBarContainer}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;
          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigateToScreen(index)}
              style={[styles.tabItem]}>
              <Image style={[styles.iconStyle, {
                tintColor:isFocused ? colors.purple : colors.white,
              }]}
                source={options?.tabBarIcon} />
              <Text
                style={{
                  color: isFocused ? colors.purple : colors.white,
                  fontSize: textScale(12),
                  fontFamily: fontFamily?.muktaMedium,
                }}>
                {options?.tabBarLabel}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.grey,
    borderTopWidth: 1,
    borderTopColor: colors.grey,
    width: width - moderateScale(30),
    marginTop:moderateScale(4),
    marginBottom: moderateScaleVertical(16),
    paddingHorizontal: moderateScale(30),
    borderRadius: moderateScale(16),
    alignSelf: 'center',
    alignItems: 'center',
  },
  tabItem: {
    marginVertical: moderateScale(10),
    alignItems: 'center',
  },
  iconStyle: {
    height: moderateScale(25),
    width: moderateScale(25),
  },
});

export default memo(BottomBarCustom);
