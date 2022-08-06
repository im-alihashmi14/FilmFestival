/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image as RNImage, ImageProps, StyleSheet} from 'react-native';
import {heightRef, widthRef} from 'src/config/screenSize';

interface Props extends ImageProps {
  size?: number;
  height?: number | string;
  width?: number | string;
  color?: string;
}

const Image = ({
  size,
  height = '100%',
  width = '100%',
  style,
  color,
  resizeMode = 'contain',
  ...rest
}: Props) => {
  let imageHeight = typeof height === 'string' ? height : height * heightRef,
    imageWidth = typeof width === 'string' ? width : width * widthRef;
  if (size !== undefined) {
    imageHeight = size * heightRef;
    imageWidth = size * heightRef;
  }

  return (
    <RNImage
      style={[
        {
          height: imageHeight,
          width: imageWidth,
          resizeMode,
        },
        color !== undefined ? {tintColor: color} : {},
        style,
      ]}
      {...{...rest}}
    />
  );
};

export default Image;
