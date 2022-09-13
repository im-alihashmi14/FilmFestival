/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {heightRef} from 'src/config/screenSize';
import Text from '../Text';
import View from '../View';

const OutlinedButton = ({
  onPress,
  text,
  textSize,
  height,
  width,
  borderWidth,
  ...rest
}: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        style.main,
        {
          height,
          borderRadius: height ? height / 2 : heightRef * 30,
          width,
          borderWidth: borderWidth ?? heightRef,
          borderColor: globalStyles.Theme.border,
        },
      ]}
      onPress={onPress}
      {...rest}>
      <View style={[style.container, {padding: height ? 0 : heightRef * 15}]}>
        <Text fontSize={14} color={globalStyles.Theme.white}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OutlinedButton;

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
