import {makeUseStyles} from 'react-native-stylex';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';

export const useStyles = makeUseStyles(({palette, utils, breakpoints}) => ({
  main: {
    flex: 1,
    backgroundColor: globalStyles.Theme.backgroundColor,
  },
  container: {
    paddingHorizontal: widthRef * 30,
    paddingVertical: heightRef * 10,
  },
  topText: {
    fontSize: fontRef * 14,
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
  },
  qna: {
    // backgroundColor: 'red',
    marginTop: heightRef * 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: fontRef * 14,
    fontWeight: '500',
    color: globalStyles.Theme.white,
  },
  answer: {
    fontSize: fontRef * 10,
    fontWeight: '400',
    color: globalStyles.Theme.white,
    lineHeight: fontRef * 15,
  },
  answerContainer: {
    paddingTop: heightRef * 10,
    paddingBottom: heightRef * 20,
    borderBottomWidth: heightRef,
    borderBottomColor: globalStyles.Theme.border,
  },
}));
