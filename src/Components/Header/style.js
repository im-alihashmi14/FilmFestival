import {StyleSheet} from 'react-native';
import {heightRef, widthRef} from 'src/config/screenSize';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    height: heightRef * 70,
    flexDirection: 'row',
    paddingHorizontal: widthRef * 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoImage: {
    height: heightRef * 45,
    width: widthRef * 100,
    resizeMode: 'contain',
  },
});
