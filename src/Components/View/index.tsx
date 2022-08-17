import React from 'react';
import {StyleProp, View as RNView, ViewProps, ViewStyle} from 'react-native';
import {DeviceType} from 'react-native-device-info';
import {device} from 'src/config/screenSize';
import {useLayout} from 'src/Context/AppContext';
import {responsiveSize, Size} from 'src/Helper/Responsive';

interface IViewProps extends ViewProps {
  deviceStyle?: {
    [k in DeviceType]?: StyleProp<ViewStyle> | undefined;
  };
  height?: Size;
  width?: Size;
}

const View = ({
  children,
  height,
  width,
  style,
  deviceStyle = {},
  ...rest
}: IViewProps) => {
  const {heightRef, widthRef} = useLayout();
  return (
    <RNView
      {...rest}
      style={[
        style,
        height !== undefined && {height: responsiveSize(height) * heightRef},
        width !== undefined && {width: responsiveSize(width) * widthRef},
        deviceStyle[device],
      ]}>
      {children}
    </RNView>
  );
};

export default View;
