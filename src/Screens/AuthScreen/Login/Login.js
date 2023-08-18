import React, {useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import colors from '../../../Styles/colors';
import commonStyle from '../../../Styles/commonStyle';
import fontFamily from '../../../Styles/fontFamily';
import {moderateScale} from '../../../Styles/responsiveSize';
import {showError, showSuccess} from '../../../utils/helperFunctions';
import validator from '../../../utils/validations';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoader, setIsLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const moveToNextSxreen = (screenName, data) => {
    navigation.navigate(screenName, {data: data});
  };

  const isValidData = () => {
    const error = validator({email, password});
    console.log(error, 'errorerror');
    if (error) {
      showError(error);
      return;
    }
    return true;
  };

  const _login = async () => {
    const checkValid = isValidData();
    if (!checkValid) {
      return;
    }
    setIsLoader(true);
    let data = {
      email: email,
      password: password,
    };

    await actions
      .userLogin(data, {'Content-Type': 'application/json'})
      .then(res => {
        if (!!res?.success) {
          showSuccess(res.message);
          actions.userDate(res?.data);
          return;
        }
        showError(res.message);
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
          buttonText={en.LOGIN}
          disabled={isLoader}
          loaderVisibal={isLoader}
          activeOpacity={0.9}
          onPress={_login}
        />
        <View
          style={{alignItems: 'flex-end', paddingVertical: moderateScale(14)}}>
          <Text style={commonStyle.font12Bold}>{en.FORGETPASSWORD}</Text>
        </View>
        <TouchableOpacity
          onPress={() => moveToNextSxreen(navigationStrings.SIGNUPSCREEN)}
          style={{alignItems: 'center', paddingVertical: moderateScale(14)}}>
          <Text style={commonStyle.font12Bold}>{en.REGISTER}</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
};

export default Login;

const styles = StyleSheet.create({});
