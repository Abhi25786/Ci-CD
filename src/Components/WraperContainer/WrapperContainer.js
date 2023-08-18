import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Styles/colors';
import {height, width} from '../../Styles/responsiveSize';
import HeaderOne from '../Headers/HeaderOne';
import Loader from '../LoaderButton/Loader';
import CustomStatusBar from '../StatusBar/CustomStatusBar';

const WrapperContainer = ({
  containerStyle,
  statusBarColor,
  children,
  backGroundColor = colors.theamColor,

  HeaderShow = false,
  headerStyle,
  headerLeftView = () => {},
  headerCenterView = () => {},
  headerRightView = () => { },
  withModal,
  isLoading
}) => {
  return (
    <LinearGradient
      style={{flex: 1, ...containerStyle}}
      colors={[colors.blackOpacity86, backGroundColor, colors.blackOpacity86]}>
      <CustomStatusBar backgroundColor={colors.blackOpacity0} />
      {HeaderShow ? (
        <HeaderOne
          headerStyle={{backgroundColor: colors.blackOpacity0, ...headerStyle}}
          leftIcon={headerLeftView}
          centerIcon={headerCenterView}
          righrtIcon={headerRightView}
        />
      ) : null}
      <View style={{ flex: 1, ...containerStyle }}>{children}</View>
      <Loader withModal={withModal} isLoading={isLoading} />
    </LinearGradient>
  );
};

export default memo(WrapperContainer);

const styles = StyleSheet.create({});
