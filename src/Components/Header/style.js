import {makeUseStyles} from 'react-native-stylex';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, isPhone, widthRef} from 'src/config/screenSize';

export const useStyles = makeUseStyles(({palette, utils, breakpoints}) => ({
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
    height: isPhone ? heightRef * 45 : widthRef * 34,
    width: isPhone ? widthRef * 100 : widthRef * 76,
    resizeMode: 'contain',
  },
  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'none',
    ...breakpoints.up('sm', {
      display: 'flex',
    }),
  },
  icon: {
    ...breakpoints.up('sm', {
      display: 'none',
    }),
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: widthRef * 30,
    display: 'none',
    ...breakpoints.up('sm', {
      display: 'flex',
    }),
  },
  item: {
    color: globalStyles.Theme.white,
    fontSize: fontRef * 12,
    fontWeight: '400',
    marginLeft: widthRef * 30,
  },
}));
