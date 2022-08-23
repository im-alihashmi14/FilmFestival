/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {fontRef} from 'src/config/screenSize';
import {useLayout} from 'src/Context/AppContext';
import Gradient from '../Gradient';
import Text from '../Text';

const GradientButton = ({
  onPress,
  text,
  textSize,
  height,
  width,
  ...rest
}: TouchableOpacityProps) => {
  const {heightRef} = useLayout();
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        style.main,
        {
          height,
          borderRadius: height ? height / 2 : heightRef * 30,
          width,
        },
      ]}
      onPress={onPress}
      {...rest}>
      <Gradient
        style={[style.container, {padding: height ? 0 : heightRef * 15}]}
        start={{x: 0, y: 0}}
        colors={globalStyles.Theme.buttonGradient}>
        <Text fontSize={14 * fontRef} color={globalStyles.Theme.white}>
          {text}
        </Text>
      </Gradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const style = StyleSheet.create({
  main: {
    overflow: 'hidden',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
