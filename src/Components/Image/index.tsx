/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image as RNImage,
  ImageBackground,
  ImageProps,
  StyleSheet,
} from 'react-native';
import {heightRef, widthRef} from 'src/config/screenSize';
import View from '../View';

interface Props extends ImageProps {
  size?: number;
  dim?: number;
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
  dim = 0,
  ...rest
}: Props) => {
  let imageHeight = typeof height === 'string' ? height : height * heightRef,
    imageWidth = typeof width === 'string' ? width : width * widthRef;
  if (size !== undefined) {
    imageHeight = size * heightRef;
    imageWidth = size * heightRef;
  }

  return (
    <ImageBackground
      resizeMode={resizeMode}
      style={[
        {
          height: imageHeight,
          width: imageWidth,
          overflow: 'hidden',
        },
        color !== undefined ? {tintColor: color} : {},
        style,
      ]}
      {...{...rest}}>
      <View
        style={[
          StyleSheet.absoluteFill,
          {backgroundColor: `rgba(0,0,0,${dim / 10})`, flex: 1},
        ]}
      />
    </ImageBackground>
  );
};

export default Image;
