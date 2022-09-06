import {makeUseStyles} from 'react-native-stylex';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, isPhone, widthRef} from 'src/config/screenSize';
import {responsiveSize} from 'src/Helper/Responsive';

export const useStyles = makeUseStyles(({palette, utils, breakpoints}) => ({
  main: {
    flex: 1,
    backgroundColor: globalStyles.Theme.backgroundColor,
  },
  container: {
    paddingHorizontal: widthRef * 30,
    paddingVertical: heightRef * 20,
  },
  topText: {
    fontSize: responsiveSize({Tablet: 20, Handset: 14}) * fontRef,
    fontWeight: '400',
    color: globalStyles.Theme.white,
  },
  title2: {
    fontSize: fontRef * responsiveSize({Tablet: 32, Handset: 28}),
    fontWeight: '600',
    color: globalStyles.Theme.SecondaryColor,
    lineHeight: fontRef * 42,
  },
  title: {
    fontSize: responsiveSize({Tablet: 32, Handset: 42}) * fontRef,
    fontWeight: '500',
    lineHeight: fontRef * 60,
    color: globalStyles.Theme.white,
  },
  section: {
    marginTop: heightRef * 30,
    ...breakpoints.up('sm', {flexDirection: 'row'}),
  },
  qna: {
    marginTop: heightRef * 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: responsiveSize({Tablet: 16, Handset: 14}) * fontRef,
    fontWeight: '500',
    color: globalStyles.Theme.white,
  },
  answer: {
    fontSize: responsiveSize({Tablet: 14, Handset: 10}) * fontRef,
    fontWeight: '400',
    color: '#CBCACE',
    lineHeight: responsiveSize({Tablet: 21, Handset: 15}) * fontRef,
  },
  answerContainer: {
    paddingTop: heightRef * 10,
    paddingBottom: heightRef * 20,
    borderBottomWidth: heightRef,
    borderBottomColor: globalStyles.Theme.border,
  },
  left: {
    flex: 0.45,
    ...breakpoints.up('sm', {marginRight: widthRef * 30}),
  },
  right: {
    flex: 0.55,
  },
}));
