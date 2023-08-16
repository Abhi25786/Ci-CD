import {StyleSheet} from 'react-native';
import colors from './colors';
import fontFamily from './fontFamily';
import {textScale} from './responsiveSize';

export default commonStyle = StyleSheet.create({
  flexRowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowJustifyContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    },
    flexRowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
  font10Small: {
    fontSize: textScale(10),
    fontFamily: fontFamily.muktaSmall,
    color: colors.white,
  },
  font12Small: {
    fontSize: textScale(12),
    fontFamily: fontFamily.muktaSmall,
    color: colors.white,
  },
  font14Small: {
    fontSize: textScale(14),
    fontFamily: fontFamily.muktaSmall,
    color: colors.white,
  },
  font16Small: {
    fontSize: textScale(16),
    fontFamily: fontFamily.muktaSmall,
    color: colors.white,
  },
  font18Small: {
    fontSize: textScale(18),
    fontFamily: fontFamily.muktaSmall,
    color: colors.white,
  },
  font20Small: {
    fontSize: textScale(20),
    fontFamily: fontFamily.muktaSmall,
    color: colors.white,
  },
  font10Medium: {
    fontSize: textScale(10),
    fontFamily: fontFamily.muktaMedium,
    color: colors.white,
  },
  font12Medium: {
    fontSize: textScale(12),
    fontFamily: fontFamily.muktaMedium,
    color: colors.white,
  },
  font14Medium: {
    fontSize: textScale(14),
    fontFamily: fontFamily.muktaMedium,
    color: colors.white,
  },
  font16Medium: {
    fontSize: textScale(16),
    fontFamily: fontFamily.muktaMedium,
    color: colors.white,
  },
  font18Medium: {
    fontSize: textScale(18),
    fontFamily: fontFamily.muktaMedium,
    color: colors.white,
  },
  font20Medium: {
    fontSize: textScale(20),
    fontFamily: fontFamily.muktaMedium,
    color: colors.white,
  },
  font10Regular: {
    fontSize: textScale(10),
    fontFamily: fontFamily.muktaRegular,
    color: colors.white,
  },
  font12Regular: {
    fontSize: textScale(12),
    fontFamily: fontFamily.muktaRegular,
    color: colors.white,
  },
  font14Regular: {
    fontSize: textScale(14),
    fontFamily: fontFamily.muktaRegular,
    color: colors.white,
  },
  font16Regular: {
    fontSize: textScale(16),
    fontFamily: fontFamily.muktaRegular,
    color: colors.white,
  },
  font18Regular: {
    fontSize: textScale(18),
    fontFamily: fontFamily.muktaRegular,
    color: colors.white,
  },
  font20Regular: {
    fontSize: textScale(20),
    fontFamily: fontFamily.muktaRegular,
    color: colors.white,
  },

  font10Bold: {
    fontSize: textScale(10),
    fontFamily: fontFamily.muktaBold,
    color: colors.white,
  },
  font12Bold: {
    fontSize: textScale(12),
    fontFamily: fontFamily.muktaBold,
    color: colors.white,
  },
  font14Bold: {
    fontSize: textScale(14),
    fontFamily: fontFamily.muktaBold,
    color: colors.white,
  },
  font16Bold: {
    fontSize: textScale(16),
    fontFamily: fontFamily.muktaBold,
    color: colors.white,
  },
  font18Bold: {
    fontSize: textScale(18),
    fontFamily: fontFamily.muktaBold,
    color: colors.white,
  },
  font20Bold: {
    fontSize: textScale(20),
    fontFamily: fontFamily.muktaBold,
    color: colors.white,
  },
});
