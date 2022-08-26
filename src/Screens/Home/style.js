import {makeUseStyles} from 'react-native-stylex';
import globalStyles from 'src/config/globalStyles';
import {heightRef} from 'src/config/screenSize';

export const useStyles = makeUseStyles(({palette, utils, breakpoints}) => ({
  sliderContainer: {
    width: '100%',
    ...breakpoints.up('sm', {flexDirection: 'row-reverse'}),
  },
  parallaxContainer: {
    ...breakpoints.up('sm', {width: '35%'}),
  },
  sliderTitleContainer: {
    ...breakpoints.up('sm', {width: '65%', justifyContent: 'center'}),
  },
  container: {
    flex: 1,
    backgroundColor: globalStyles.Theme.backgroundColor,
  },
  festivalCOntainer: {
    width: '100%',
    padding: 30,
    paddingVertical: 60,
    height: 400 * heightRef,
    // ...breakpoints.up('sm', {height: 258 * heightRef}),
  },
}));
