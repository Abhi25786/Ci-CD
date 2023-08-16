import { showMessage } from 'react-native-flash-message';
import { moderateScaleVertical } from '../Styles/responsiveSize';
export const showError = (message) => {
    console.log(message, 'THIS IS MESSAGE');
    showMessage({
      type: 'danger',
      icon: 'danger',
      floating: true,
      animated: true,
      message,
      style: { marginTop: moderateScaleVertical(26) },
    });
    // Toast.show(message);
  };
  
  export  const showSuccess = (message) => {
    showMessage({
      type: 'success',
      icon: 'success',
      floating: true,
      animated: true,
      style: { marginTop: moderateScaleVertical(26) },
      message,
    });
  
    // Toast.show(message);
  };