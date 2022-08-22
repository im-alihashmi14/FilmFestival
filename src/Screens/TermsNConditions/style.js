import {makeUseStyles} from 'react-native-stylex';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';

export const useStyles = makeUseStyles(({palette, utils, breakpoints}) => ({
  main: {
    flex: 1,
    backgroundColor: globalStyles.Theme.backgroundColor,
  },
  container: {
    paddingVertical: heightRef * 15,
    paddingHorizontal: widthRef * 30,
  },
  header: {
    color: globalStyles.Theme.white,
    fontSize: fontRef * 28,
    fontWeight: '600',
  },
  headerDescription: {
    color: globalStyles.Theme.grayText,
    fontSize: fontRef * 14,
    fontWeight: '400',
    marginTop: heightRef * 10,
  },
  section: {
    marginTop: heightRef * 30,
    paddingBottom: heightRef * 20,
    borderBottomWidth: heightRef,
    borderBottomColor: globalStyles.Theme.border,
  },
  title: {
    color: globalStyles.Theme.liteBlue,
    fontSize: fontRef * 18,
    fontWeight: '500',
    marginLeft: heightRef * 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    height: heightRef * 15,
    width: heightRef * 15,
  },
  description: {
    color: globalStyles.Theme.white,
    fontSize: fontRef * 13,
    fontWeight: '500',
    marginLeft: heightRef * 27,
    lineHeight: fontRef * 19,
    marginTop: heightRef * 5,
  },
}));
