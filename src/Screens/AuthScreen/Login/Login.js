import React from 'react';
import {StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoaderButton from '../../../Components/LoaderButton/LoaderButton';
import TextInputComponent from '../../../Components/TextInput/TextInputComponent';
import WrapperContainer from '../../../Components/WraperContainer/WrapperContainer';
import en from '../../../constants/lang/en';
import colors from '../../../Styles/colors';
import {moderateScale} from '../../../Styles/responsiveSize';

const Login = props => {
  return (
    <WrapperContainer
      backGroundColor={colors.theamColor}
      containerStyle={{
        paddingHorizontal: moderateScale(20),
        justifyContent: 'center',
      }}>
      <KeyboardAwareScrollView
        contentContainerStyle={{justifyContent:'center',flex:1}}
      >
        <TextInputComponent
          placeholder={en.LOGIN}
          placeholderTextColor={colors.white}
          mainContaineStyle={{marginBottom: moderateScale(10)}}
        />
        <TextInputComponent
          placeholder={en.PASSWORD}
          placeholderTextColor={colors.white}
          mainContaineStyle={{marginBottom: moderateScale(10)}}
        />
        <LoaderButton
          buttonText={en.LOGIN}
          activeOpacity={0.9}
        />
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  
});
