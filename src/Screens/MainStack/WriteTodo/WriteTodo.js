import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../../Components/WraperContainer/WrapperContainer';
import MultipalLineTextInput from '../../../Components/TextInput/MultipalLineTextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextInputComponent from '../../../Components/TextInput/TextInputComponent';
import {moderateScale, textScale} from '../../../Styles/responsiveSize';
import colors from '../../../Styles/colors';
import en from '../../../constants/lang/en';
import fontFamily from '../../../Styles/fontFamily';
import LoaderButton from '../../../Components/LoaderButton/LoaderButton';
import {showError, showSuccess} from '../../../utils/helperFunctions';
import actions from '../../../redux/actions';

const WriteTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isLoader, setIsLoader] = useState(false);
  const onUploadTODO = () => {
    if (title.length <= 0) {
      showError(en.PLEASE_ENTER_TITLE);
      return;
    }
    if (description.length <= 0) {
      showError(en.PLEASE_ENTER_DETAIL);
      return;
    }
    setIsLoader(true);
    actions
      .uploadTodo({name: title, description: description})
      .then(res => {
        if (!!res?.success) {
          showSuccess(res.message);

          setTitle('');
          setDescription('');
          setIsLoader(false);
          return;
        }
        showSuccess(res.message);
        setIsLoader(false);
      })
      .catch(error => {
        setIsLoader(false);
        showSuccess(res.message);
      });
  };
  return (
    <WrapperContainer>
      <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
        <View style={{flex: 1, paddingHorizontal: moderateScale(16)}}>
          <Text style={styles.titileStyle}>{en.TO_DO_TOPIC}</Text>
          <TextInputComponent
            mainContaineStyle={styles.titleTextView}
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <Text style={[styles.subTitleStyle]}>{en.TOPIC_DETAIL}</Text>
          <MultipalLineTextInput
            value={description}
            onChangeText={text => setDescription(text)}
          />
          <LoaderButton
            buttonText={en.UPLOAD_TODO}
            buttonViewStyle={{marginTop: moderateScale(16)}}
            activeOpacity={0.9}
            disabled={isLoader}
            loaderVisibal={isLoader}
            onPress={onUploadTODO}
          />
        </View>
      </KeyboardAwareScrollView>
    </WrapperContainer>
  );
};

export default WriteTodo;

const styles = StyleSheet.create({
  titileStyle: {
    marginTop: moderateScale(16),
    fontFamily: fontFamily.muktaBold,
    fontSize: textScale(16),
    color: colors.white,
  },
  subTitleStyle: {
    marginBottom: moderateScale(16),
    fontFamily: fontFamily.muktaBold,
    fontSize: textScale(14),
    color: colors.white,
    },
    titleTextView: {
        marginVertical: moderateScale(16),
              backgroundColor: colors.grayOpacity80,
              borderRadius: moderateScale(12),
              borderWidth: 0,
  }
});
