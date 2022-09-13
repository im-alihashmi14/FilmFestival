import {makeUseStyles} from 'react-native-stylex';
import globalStyles from 'src/config/globalStyles';

export const useStyles = makeUseStyles(
  ({palette, utils, breakpoints, layout}) => ({
    sliderContainer: {
      width: '100%',
      ...breakpoints.up('sm', {flexDirection: 'row-reverse'}),
    },
    parallaxContainer: {
      ...breakpoints.up('sm', {width: '40%'}),
    },
    sliderTitleContainer: {
      paddingHorizontal: layout.widthRef(30),
      ...breakpoints.up('sm', {
        width: '60%',
        justifyContent: 'center',
      }),
    },
    container: {
      flex: 1,
      backgroundColor: globalStyles.Theme.backgroundColor,
    },
    festivalCOntainer: {
      width: '100%',
      padding: 30,
      paddingVertical: 60,
      height: 400 * layout.heightRef(),
      // ...breakpoints.up('sm', {height: 258 * heightRef}),
    },
  }),
);
