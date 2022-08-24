import {makeUseStyles} from 'react-native-stylex';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';
import {responsiveSize} from 'src/Helper/Responsive';

export const useStyles = makeUseStyles(({palette, utils, breakpoints}) => ({
  main: {
    flex: 1,
    backgroundColor: globalStyles.Theme.backgroundColor,
  },
  container: {
    marginTop: responsiveSize({Tablet: 40, Handset: 0}) * heightRef,
    marginHorizontal: heightRef * 30,
    flex: 1,
    ...breakpoints.up('sm', {flexDirection: 'row'}),
  },
  leftContainer: {
    backgroundColor: globalStyles.Theme.darkBlue,
    flex: 0.5,
    padding: heightRef * 20,
    borderRadius: responsiveSize({Tablet: 10, Handset: 15}) * heightRef,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 0.5,
    zIndex: -100,
    borderRadius: responsiveSize({Tablet: 10, Handset: 15}) * heightRef,
    overflow: 'hidden',
    marginTop: heightRef * -30,
    paddingHorizontal: responsiveSize({Tablet: 40, Handset: 30}) * widthRef,
    height: responsiveSize({Tablet: 360, Handset: 250}) * heightRef,
    justifyContent: 'space-evenly',
    paddingTop: heightRef * 30,
    ...breakpoints.up('sm', {
      marginLeft: widthRef * -30,
      marginTop: 0,
      paddingTop: 0,
    }),
  },
  textTop: {
    fontWeight: '500',
    color: globalStyles.Theme.white,
    marginBottom: heightRef * 20,
  },
  textInputContainer: {
    backgroundColor: '#273055',
    width: '90%',
    marginBottom: heightRef * 10,
    minHeight: heightRef * 40,
    borderRadius: heightRef * 10,
    borderWidth: fontRef * 0.5,
    borderColor: globalStyles.Theme.liteBlue,
  },
  textInput: {
    flex: 1,
    marginHorizontal: widthRef * 10,
    color: globalStyles.Theme.white,
  },
  contactInfo: {
    color: globalStyles.Theme.backgroundColor,
    fontSize: responsiveSize({Tablet: 30, Handset: 20}) * fontRef,
  },
  row: {
    flexDirection: 'row',
    marginTop: heightRef * responsiveSize({Tablet: 20, Handset: 10}),
  },
  phoneEmail: {
    // backgroundColor: 'red',
  },
  textItem: {
    color: '#484848',
    fontSize: responsiveSize({Tablet: 20, Handset: 10}) * fontRef,
  },
  icon: {
    height: responsiveSize({Tablet: 20, Handset: 15}) * heightRef,
    width: responsiveSize({Tablet: 20, Handset: 15}) * heightRef,
    marginRight: widthRef * 15,
  },
  socialLinkTitle: {
    color: '#737373',
    fontSize: responsiveSize({Tablet: 18, Handset: 10}) * fontRef,
  },
  socialLinks: {
    flexDirection: 'row',
    marginTop: heightRef * 20,
    alignItems: 'center',
  },
  icon2: {
    marginRight: widthRef * 10,
  },
}));
