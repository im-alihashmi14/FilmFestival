/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable} from 'react-native';
import Animated, {Layout} from 'react-native-reanimated';
import {makeUseStyles} from 'react-native-stylex';
import globalStyles from 'src/config/globalStyles';
import {heightRef, widthRef} from 'src/config/screenSize';
import {responsiveSize} from 'src/Helper/Responsive';
import Gradient from '../Gradient';

import View from '../View';

const Toggle = ({toggle, setToggle}) => {
  const style = useStyles();
  return (
    <Pressable onPress={() => setToggle(prev => !prev)}>
      <Gradient
        style={[
          style.main,
          {
            alignItems: toggle ? 'flex-end' : 'flex-start',
          },
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#6260FA', '#F60ACB']}>
        <Animated.View layout={Layout.springify()} style={style.dot} />
      </Gradient>
    </Pressable>
  );
};

export default Toggle;

export const useStyles = makeUseStyles(({palette, utils, breakpoints}) => ({
  main: {
    width: responsiveSize({Tablet: 45, Handset: 40}) * widthRef,
    height: responsiveSize({Tablet: 25, Handset: 20}) * heightRef,
    borderRadius: 50,
    justifyContent: 'center',
    paddingHorizontal: responsiveSize({Tablet: 5, Handset: 3}) * widthRef,
    marginHorizontal: widthRef * 10,
  },
  dot: {
    height: responsiveSize({Tablet: 17, Handset: 13.5}) * heightRef,
    width: responsiveSize({Tablet: 17, Handset: 13.5}) * heightRef,
    backgroundColor: globalStyles.Theme.white,
    borderRadius: 50,
  },
}));
