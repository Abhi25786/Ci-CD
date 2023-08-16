import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImageRotaionComponent from '../../../Components/AnimatedComponent/ImageRotaionComponent';
import LoaderButton from '../../../Components/LoaderButton/LoaderButton';
import TextInputComponent from '../../../Components/TextInput/TextInputComponent';
import WrapperContainer from '../../../Components/WraperContainer/WrapperContainer';
import en from '../../../constants/lang/en';
import navigationStrings from '../../../navigation/navigationStrings';
import {userDate} from '../../../redux/actions/auth';
import colors from '../../../Styles/colors';
import commonStyle from '../../../Styles/commonStyle';
import fontFamily from '../../../Styles/fontFamily';
import {moderateScale} from '../../../Styles/responsiveSize';
import { showError } from '../../../utils/helperFunctions';
import validator from '../../../utils/validations';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const moveToNextSxreen = (screenName, data) => {
    navigation.navigate(screenName, {data: data});
  };

  const isValidData = () => {
    const error = validator({ email, password });
    console.log(error,'errorerror');
    if (error) {
      showError(error);
      return;
    }
    return true;
  };

  const _login = () => {
    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }
    const data = {
      email: email,
      password: password,
      access_token: 'sdcasdvcasdavcdvfyvsvdvi',
    };
    userDate(data);
  };
  return (
    <WrapperContainer
      backGroundColor={colors.theamColor}
      containerStyle={{
        paddingHorizontal: moderateScale(20),
      }}>
      <KeyboardAwareScrollView
        scrollEnabled
        contentContainerStyle={{justifyContent: 'center', flex: 1}}>
        <ImageRotaionComponent rotation={false} imageStyle={{marginTop: 0}} />
        <TextInputComponent
          placeholder={en.LOGIN}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholderTextColor={colors.white}
          mainContaineStyle={{marginBottom: moderateScale(14)}}
        />
        <TextInputComponent
          placeholder={en.PASSWORD}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholderTextColor={colors.white}
          mainContaineStyle={{marginBottom: moderateScale(14)}}
        />
        <LoaderButton
          buttonText={en.LOGIN}
          activeOpacity={0.9}
          onPress={_login}
        />
        <View
          style={{alignItems: 'flex-end', paddingVertical: moderateScale(14)}}>
          <Text style={commonStyle.font12Bold}>{en.FORGETPASSWORD}</Text>
        </View>
        <LoaderButton
          buttonText={en.SIGNUP}
          activeOpacity={0.9}
          onPress={() => moveToNextSxreen(navigationStrings.SIGNUPSCREEN)}
        />
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
};

export default Login;

const styles = StyleSheet.create({});
