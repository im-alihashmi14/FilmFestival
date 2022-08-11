import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const device = DeviceInfo.getDeviceType();
export const isPhone = device === 'Handset';

const devices = {
  Handset: {
    height: 800,
    width: 428,
  },
  Tablet: {
    height: 515,
    width: 834,
  },
  Tv: {
    height: 1099,
    width: 1920,
  },
  unknown: {
    height: 515,
    width: 834,
  },
};

const fullHeight = Dimensions.get('window').height;
const heightRef = fullHeight / devices[device].height;
const fontRef = fullHeight / devices[device].height;
const fullWidth = Dimensions.get('window').width;
const widthRef = fullWidth / devices[device].width;
export {fullWidth, fullHeight, heightRef, widthRef, fontRef};
