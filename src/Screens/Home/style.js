import {StyleSheet} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {makeUseStyles} from 'react-native-stylex';
import {maxWidth} from 'react-native-stylex/media-query';

export const useStyles = makeUseStyles(({palette, utils, breakpoints}) => ({
  sliderContainer: {
    width: '100%',
    ...breakpoints.up('sm', {flexDirection: 'row-reverse'}),
  },
  parallaxContainer: {
    ...breakpoints.up('sm', {width: '35%'}),
  },
  sliderTitleContainer: {
    ...breakpoints.up('sm', {width: '50%', justifyContent: 'center'}),
  },
  container: {
    flex: 1,
    backgroundColor: globalStyles.Theme.backgroundColor,
  },
}));
