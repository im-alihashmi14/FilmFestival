import {makeUseStyles} from 'react-native-stylex';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, isPhone, widthRef} from 'src/config/screenSize';

export const useStyles = makeUseStyles(({palette, utils, breakpoints}) => ({
  main: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: widthRef * 40,
    paddingTop: heightRef * 70,
    paddingBottom: heightRef * 60,
    ...breakpoints.up('sm', {width: '60%'}),
  },
  textTop: {
    fontWeight: '300',
    fontSize: fontRef * 16,
  },
  header: {
    fontSize: fontRef * 28,
    fontWeight: '700',
  },
  textInfo: {
    fontSize: fontRef * 14,
    fontWeight: '500',
    marginTop: heightRef * 10,
  },
  check: {
    height: heightRef * 20,
    width: heightRef * 20,
    backgroundColor: globalStyles.Theme.liteGreen,
    borderRadius: heightRef * 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: heightRef * 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: widthRef * 165,
    padding: heightRef * 13,
    borderRadius: heightRef * 10,
    backgroundColor: '#2D313E',
    flexDirection: 'row',
  },
  social: {
    height: heightRef * 20,
    width: heightRef * 20,
    resizeMode: 'contain',
  },
  inputField: {
    flexDirection: isPhone ? 'column' : 'row',
    justifyContent: 'space-between',
  },
  textBtn: {
    color: globalStyles.Theme.white,
    paddingLeft: widthRef * 10,
  },
}));
