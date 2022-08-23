import {StyleSheet} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {
  fontRef,
  fullWidth,
  heightRef,
  isPhone,
  widthRef,
} from 'src/config/screenSize';

export default StyleSheet.create({
  main: {
    flex: 1,
    padding: heightRef * 20,
  },
  scroll: {
    paddingHorizontal: widthRef * 40,
    paddingTop: heightRef * 30,
    paddingBottom: heightRef * 60,
  },
  logoImage: {
    height: isPhone ? heightRef * 45 : widthRef * 34,
    width: isPhone ? widthRef * 100 : widthRef * 76,
    resizeMode: 'contain',
  },
  centerItems: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    fontSize: isPhone ? fontRef * 26 : fontRef * 36,
    fontWeight: '600',
    textAlign: 'center',
    color: globalStyles.Theme.white,
  },
  top2: {
    fontSize: isPhone ? fontRef * 18 : fontRef * 24,
    fontWeight: '400',
    color: globalStyles.Theme.white,
    textAlign: 'center',
    marginTop: heightRef * 5,
  },
  email: {
    fontSize: isPhone ? fontRef * 20 : fontRef * 24,
    fontWeight: '500',
    color: globalStyles.Theme.cyan,
    textAlign: 'center',
    marginTop: heightRef * 5,
  },
  bottom: {
    fontSize: isPhone ? fontRef * 14 : fontRef * 20,
    fontWeight: '400',
    color: globalStyles.Theme.cyan,
    textAlign: 'center',
  },
  absolute: {
    position: 'absolute',
    width: fullWidth,
    zIndex: 20,
  },
  otpContainer: {
    width: '100%',
    marginTop: heightRef * 40,
    marginBottom: heightRef * 30,
  },
  input: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    color: 'transparent',
  },
  otpText: {
    color: globalStyles.Theme.white,
    fontSize: isPhone ? 35 * fontRef : fontRef * 45,
  },
  otpItem: {
    marginHorizontal: isPhone ? widthRef * 9 : widthRef * 15,
    width: isPhone ? 31 * heightRef : 50 * heightRef,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: heightRef * 3,
    borderBottomColor: globalStyles.Theme.white,
    height: isPhone ? heightRef * 45 : heightRef * 60,
  },
  otp: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
