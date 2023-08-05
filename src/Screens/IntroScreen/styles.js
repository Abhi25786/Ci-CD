import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../Styles/colors';
import colos from '../../Styles/colors';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../../Styles/responsiveSize';

export const style = StyleSheet.create({
  introMainView: {
    flex: 1,
    width: width,
  },
  introImage: {
    height: height / moderateScale(3),
    width: width - moderateScale(20),
    alignSelf: 'center',
  },
    textMainView: {
        marginTop: moderateScaleVertical(43),
        alignItems: 'center'
    },
  titelStyle: {
    fontSize: textScale(28),
    fontWeight: '700',
    lineHeight: 36,
    color:colors.white
  },
  subTitle: {
    marginTop: moderateScaleVertical(16),
    maxWidth: moderateScale(250),
    fontSize: textScale(14),
    fontWeight: '500',
    lineHeight: 20,
    color: '#8F92A1',
    textAlign: 'center',
  },
  nextButtonStyle: {
    fontSize: textScale(14),
    fontWeight: '700',
    lineHeight: 20,
    color:colors.white,
    textAlign: 'center',
  },
  pagitationView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScaleVertical(28),
  },

    mainContainer: {
      flex: 1,
      backgroundColor: '#101027',
      alignItems: 'center',
    },
    animatedImage: {
      marginTop: height / 4,
      height:  width / 2,
      width: width / 2,
      resizeMode: 'cover',
      alignSelf:'center',
      // transform: [
      //   {
      //     rotate: animtion.interpolate({
      //       inputRange: [0, 1],
      //       outputRange: ['0deg', '360deg'],
      //       useNativeDriver: false,
      //     }
            
      //     ),
      
      //   },
      // ],
    }
  
});
