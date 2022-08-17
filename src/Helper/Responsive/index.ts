import {DeviceType} from 'react-native-device-info';
import {device} from 'src/config/screenSize';

export type Size = number | {[k in DeviceType]?: number};

export const responsiveSize = (size: Size): number => {
  if (typeof size === 'object') {
    return size[device] !== undefined
      ? (size[device] as number)
      : (Object.values(size).find(v => typeof v === 'number') as number);
  }
  return size as number;
};
