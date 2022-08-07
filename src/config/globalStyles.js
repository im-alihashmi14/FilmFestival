import {heightRef, widthRef} from './screenSize';

const {StyleSheet} = require('react-native');
export const MEDIA_HEIGHT = 295 * heightRef;
const globalStyles = {
  Theme: {
    backgroundColor: '#011826',
    // PrimaryColor: '#222780',
    PrimaryColor: '#212A6B',
    AccentPrimaryColor: '#EF4D97',
    SecondaryColor: '#3AC4F4',
    TextBackgroundColor: '#F4F8FF',
    rippleColor: '#3AC4F4',
    liteBlue: '#2EAAE0',
    gradientGray: ['#011826', '#23232357'],
    buttonGradient: ['#68E7D4', '#55A8DD', '#6260FA'],
    white: '#FFFFFF',
    cyan: '#00ECD4',
    placeholder: 'rgba(255,255,255, 0.3)',
    liteGreen: '#7BFF88',
  },

  image: (height = '100%', width = '100%') => ({
    width: typeof width === 'string' ? width : width * widthRef,
    height: typeof height === 'string' ? height : height * heightRef,
    resizeMode: 'contain',
  }),
  text: (
    fontSize = 14 * heightRef,
    fontWeight = 'normal',
    color = 'black',
  ) => ({
    fontSize,
    fontWeight,
    color,
  }),
  center: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editView: {
    height: MEDIA_HEIGHT,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
};
export default globalStyles;
