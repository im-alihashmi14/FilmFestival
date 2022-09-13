import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  ImageBackgroundProps,
} from 'react-native';
import View from '../View';

const BlurBackground = ({children, ...rest}: ImageBackgroundProps) => {
  return (
    <ImageBackground blurRadius={30} {...rest}>
      <View style={styles.dark} />
      {children}
    </ImageBackground>
  );
};

export default BlurBackground;

const styles = StyleSheet.create({
  dark: {...StyleSheet.absoluteFill, backgroundColor: 'rgba(0,0,0,0.4)'},
});
