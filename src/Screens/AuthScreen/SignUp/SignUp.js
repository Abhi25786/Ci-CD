import React, {memo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImageRotaionComponent from '../../../Components/AnimatedComponent/ImageRotaionComponent';
import LoaderButton from '../../../Components/LoaderButton/LoaderButton';
import TextInputComponent from '../../../Components/TextInput/TextInputComponent';
import WrapperContainer from '../../../Components/WraperContainer/WrapperContainer';
import imagePath from '../../../constants/imagePath';
import en from '../../../constants/lang/en';
import navigationStrings from '../../../navigation/navigationStrings';
import actions from '../../../redux/actions';
import {userDate} from '../../../redux/actions/auth';
import colors from '../../../Styles/colors';
import commonStyle from '../../../Styles/commonStyle';
import fontFamily from '../../../Styles/fontFamily';
import {moderateScale} from '../../../Styles/responsiveSize';
import {showError, showSuccess} from '../../../utils/helperFunctions';
import validator from '../../../utils/validations';
const SignUp = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoader, setIsLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const moveToNextSxreen = (screenName, data) => {
    navigation.navigate(screenName, {data: data});
  };

  const isValidData = () => {
    const error = validator({firstName, lastName, email, password});
    console.log(error, 'errorerror');
    if (error) {
      showError(error);
      return;
    }
    return true;
  };

  const _onRegister = () => {
    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }
    setIsLoader(true);
    const data = {
      name: `${firstName} ${lastName}`,
      email: email,
      password: password,
      confirmPassword: password,
      userType: 'User',
    };

    actions
      .userSignUp(data, {'Content-Type': 'application/json'})
      .then(res => {
        if (!!res?.success) {
          showSuccess(res.message);
          navigation.goBack();
          return;
        }
        showError(en.REGISTER_SUCCESSFULLY);
        setIsLoader(false);
      })
      .catch(error => {
        showError(error.message);
        setIsLoader(false);
      });
  };

  const hideAndShowPassword = () => {
    setShowPassword(!showPassword);
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
        <View style={commonStyle.flexRowSpaceBetween}>
          <TextInputComponent
            placeholder={en.NAME}
            value={firstName}
            onChangeText={text => setFirstName(text)}
            placeholderTextColor={colors.white}
            mainContaineStyle={{marginBottom: moderateScale(14), flex: 0.48}}
          />
          <TextInputComponent
            value={lastName}
            placeholder={en.LASTNAME}
            placeholderTextColor={colors.white}
            onChangeText={text => setLastName(text)}
            mainContaineStyle={{marginBottom: moderateScale(14), flex: 0.48}}
          />
        </View>
        <TextInputComponent
          value={email}
          placeholder={en.EMAIL}
          placeholderTextColor={colors.white}
          onChangeText={text => setEmail(text)}
          mainContaineStyle={{marginBottom: moderateScale(14)}}
        />
        <TextInputComponent
          placeholder={en.PASSWORD}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholderTextColor={colors.white}
          rightImageSource={
            password.length > 0
              ? !showPassword
                ? imagePath.showPassword
                : imagePath.hidePassword
              : null
          }
          secureTextEntry={showPassword ? true : false}
          rightIconStyle={{tintColor: colors.lightGreen}}
          onRightIconPress={hideAndShowPassword}
          mainContaineStyle={{marginBottom: moderateScale(14)}}
        />
        <LoaderButton
          buttonText={en.REGISTER}
          activeOpacity={0.9}
          disabled={isLoader}
          loaderVisibal={isLoader}
          onPress={_onRegister}
        />
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
};

export default memo(SignUp);

const styles = StyleSheet.create({});
