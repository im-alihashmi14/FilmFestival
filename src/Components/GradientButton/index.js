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
          width: width,
        },
      ]}
      onPress={onPress}
      {...rest}>
      <Gradient
        style={style.container}
        start={{x: 0, y: 0}}
        colors={globalStyles.Theme.buttonGradient}>
        <Text fontSize={14} color={globalStyles.Theme.white}>
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
    padding: heightRef * 15,
  },
});
