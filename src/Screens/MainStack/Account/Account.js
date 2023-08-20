import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import WrapperContainer from '../../../Components/WraperContainer/WrapperContainer';
import en from '../../../constants/lang/en';
import commonStyle from '../../../Styles/commonStyle';
import actions from '../../../redux/actions';
import {moderateScale} from '../../../Styles/responsiveSize';
import { removeItem } from '../../../utils/utils';

const Account = () => {
  const onLogOut = () => {
    // actions.userDate({});
  removeItem('userData')
  };
  return (
    <WrapperContainer>
      <TouchableOpacity
        onPress={onLogOut}
        style={{alignItems: 'center', paddingVertical: moderateScale(24)}}>
        <Text style={commonStyle.font16Bold}>{en.LOGOUT}</Text>
      </TouchableOpacity>
    </WrapperContainer>
  );
};

export default Account;

const styles = StyleSheet.create({});
