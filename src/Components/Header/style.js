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
    borderBottomWidth: isPhone ? 0 : heightRef,
    borderBottomColor: globalStyles.Theme.border,
  },
  logoImage: {
    height: isPhone ? heightRef * 45 : widthRef * 34,
    width: isPhone ? widthRef * 100 : widthRef * 76,
    resizeMode: 'contain',
  },
  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: widthRef * 30,
  },
  item: {
    color: globalStyles.Theme.white,
    fontSize: fontRef * 12,
    fontWeight: '400',
    marginLeft: widthRef * 30,
  },
});
