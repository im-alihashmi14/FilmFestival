import React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import {isPhone} from 'src/config/screenSize';

const Gradient = ({colors, children, ...rest}: LinearGradientProps) => {
  const dimensions = isPhone
    ? {start: {x: 0, y: 0}, end: {x: 0, y: 1}}
    : {start: {x: 0, y: 0}, end: {x: 1, y: 0}};
  return (
    <LinearGradient
      start={dimensions.start}
      end={dimensions.end}
      colors={colors}
      {...rest}>
      {children}
    </LinearGradient>
  );
};

export default Gradient;
