import {Blur} from '@shopify/react-native-skia';
import React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

const Gradient = ({colors, children, ...rest}: LinearGradientProps) => {
  return (
    <LinearGradient colors={colors} {...rest}>
      {children}
    </LinearGradient>
  );
};

export default Gradient;
