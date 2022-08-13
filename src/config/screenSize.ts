import {Dimensions, ScaledSize} from 'react-native';
import DeviceInfo, {DeviceType} from 'react-native-device-info';

export const device = DeviceInfo.getDeviceType() as DeviceType;
export const isPhone = device === 'Handset';
const devices: {[k in DeviceType]: {height: number; width: number}} = {
  Handset: {
    height: 800,
    width: 428,
  },
  Tablet: {
    height: 1024,
    width: 768,
  },
  Tv: {
    height: 1099,
    width: 1920,
  },
  unknown: {
    height: 515,
    width: 834,
  },
  Desktop: {
    height: 1099,
    width: 1920,
  },
  GamingConsole: {
    height: 800,
    width: 428,
  },
};
export class Layout {
  public dimensions: ScaledSize;
  constructor(dim: ScaledSize) {
    this.dimensions = dim;
  }

  public devices: {[k in DeviceType]: {height: number; width: number}} = {
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
    Desktop: {
      height: 1099,
      width: 1920,
    },
    GamingConsole: {
      height: 800,
      width: 428,
    },
  };

  get fullHeight() {
    return this.dimensions.height;
  }
  get hyp() {
    return Math.sqrt(this.fullHeight ** 2 + this.fullWidth ** 2);
  }
  get heightRef() {
    return this.fullHeight / this.devices[device].height;
  }
  get fontRef() {
    return this.fullHeight / this.devices[device].height;
  }
  get fullWidth() {
    return this.dimensions.width;
  }
  get widthRef() {
    return this.fullWidth / this.devices[device].width;
  }
  get orientation(): 'Portrait' | 'Landscape' {
    return this.fullHeight > this.fullWidth ? 'Portrait' : 'Landscape';
  }
}
export const InitialLayout = new Layout(Dimensions.get('screen'));
const fullHeight = Dimensions.get('screen').height;
const fullWidth = Dimensions.get('screen').width;
const hyp = Math.sqrt(fullHeight ** 2 + fullWidth ** 2);
const fontRef = fullHeight / devices[device].height;
const heightRef = fullHeight / devices[device].height;
const widthRef = fullWidth / devices[device].width;
export {fullWidth, fullHeight, heightRef, widthRef, fontRef};

export const getDimensions = (data: {[k in DeviceType]?: number}): number => {
  return data[device];
};
