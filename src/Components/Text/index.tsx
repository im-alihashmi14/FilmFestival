/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text as RNText, TextProps, TouchableOpacity} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {fontRef} from 'src/config/screenSize';
import {responsiveSize, Size} from 'src/Helper/Responsive';

interface Props extends TextProps {
  color?: string;
  bold?: string;
  width?: string | number;
  fontSize?: Size;
  paddingVertical?: number;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
}

const Text = ({
  color = globalStyles.Theme.PrimaryColor,
  fontSize = 14,
  bold,
  width,
  children,
  paddingVertical = 0,
  style,
  textAlignVertical = 'center',
  onPress,
  ...rest
}: Props) => {
  return onPress ? (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <RNText
        style={[
          {
            color,
            fontWeight: bold !== undefined ? 'bold' : 'normal',
            fontSize: responsiveSize(fontSize) * fontRef,
            paddingVertical: paddingVertical,
            textAlignVertical,
          },
          width !== undefined ? {width} : {},
          style,
        ]}
        {...rest}>
        {children}
      </RNText>
    </TouchableOpacity>
  ) : (
    <RNText
      style={[
        {
          color,
          fontWeight: bold !== undefined ? 'bold' : 'normal',
          fontSize: responsiveSize(fontSize) * fontRef,
          paddingVertical: paddingVertical,
          textAlignVertical,
        },
        width !== undefined ? {width} : {},
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
