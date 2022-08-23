import {makeUseStyles} from 'react-native-stylex';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, isPhone, widthRef} from 'src/config/screenSize';

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
    fontSize: isPhone ? fontRef * 14 : fontRef * 20,
    fontWeight: '400',
    color: globalStyles.Theme.white,
  },
  title2: {
    fontSize: fontRef * 28,
    fontWeight: '600',
    color: globalStyles.Theme.SecondaryColor,
    lineHeight: fontRef * 42,
  },
  title: {
    fontSize: fontRef * 42,
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
    fontSize: isPhone ? fontRef * 14 : fontRef * 20,
    fontWeight: '500',
    color: globalStyles.Theme.white,
  },
  answer: {
    fontSize: isPhone ? fontRef * 10 : fontRef * 14,
    fontWeight: '400',
    color: globalStyles.Theme.white,
    lineHeight: isPhone ? fontRef * 15 : fontRef * 21,
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
