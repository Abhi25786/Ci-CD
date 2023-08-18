import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import colors from '../../Styles/colors';
import { moderateScale } from '../../Styles/responsiveSize';

const LoadingComponent = ({loaderStyle = {}}) => {
  return (
    <View
      style={{
        flex:1,
        alignItems: 'center',
       justifyContent:'center'
      }}>
      <ActivityIndicator size={moderateScale(30)} color={colors.white} />
    </View>
  );
};
const Loader = ({isLoading = false, withModal}) => {
  if (withModal) {
    return (
      <Modal transparent visible={isLoading}>
        <LoadingComponent />
      </Modal>
    );
  }

};

export default React.memo(Loader);
