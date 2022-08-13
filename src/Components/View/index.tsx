import React from 'react';
import {StyleProp, View as RNView, ViewProps, ViewStyle} from 'react-native';
import {DeviceType} from 'react-native-device-info';
import {device} from 'src/config/screenSize';

interface IViewProps extends ViewProps {
  deviceStyle?: {
    [k in DeviceType]?: StyleProp<ViewStyle> | undefined;
  };
}

const View = ({children, style, deviceStyle = {}, ...rest}: IViewProps) => {
  return (
    <RNView {...rest} style={[style, deviceStyle[device]]}>
      {children}
    </RNView>
  );
};

export default View;
