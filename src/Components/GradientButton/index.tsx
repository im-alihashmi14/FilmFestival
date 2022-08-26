/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {heightRef} from 'src/config/screenSize';
import {useLayout} from 'src/Context/AppContext';
import {responsiveSize, Size} from 'src/Helper/Responsive';
import Gradient from '../Gradient';
import Text from '../Text';

interface GradientButton extends TouchableOpacityProps {
  text?: string;
  fontSize?: Size;
  height?: Size;
  width?: Size;
}

const GradientButton = ({
  onPress,
  text,
  fontSize = 14,
  height = responsiveSize({Tablet: 35, Handset: 43}),
  width,
  style,
  ...rest
}: GradientButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        {
          height: responsiveSize(height) * heightRef,
          borderRadius: (responsiveSize(height) * heightRef) / 2,
        },
        styles.main,
        width !== undefined && {width: responsiveSize(width) * heightRef},
        style,
      ]}
      onPress={onPress}
      {...rest}>
      <Gradient
        style={[styles.container, {padding: height ? 0 : heightRef * 15}]}
        start={{x: 0, y: 0}}
        colors={globalStyles.Theme.buttonGradient}>
        <Text fontSize={fontSize} color={globalStyles.Theme.white}>
          {text}
        </Text>
      </Gradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  main: {
    overflow: 'hidden',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
