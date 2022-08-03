import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';
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
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        style.main,
        {
          borderRadius: height ? height / 2 : heightRef * 30,
          height: height ?? heightRef * 42,
          width: width ?? widthRef * 120,
        },
      ]}
      onPress={onPress}
      {...rest}>
      <Gradient
        style={style.container}
        start={{x: 0, y: 0}}
        colors={globalStyles.Theme.buttonGradient}>
        <Text fontSize={fontRef * 10} color={globalStyles.Theme.white}>
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
