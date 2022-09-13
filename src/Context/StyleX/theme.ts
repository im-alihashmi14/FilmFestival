import {
  createBreakpointsMatcher,
  createBreakpoints,
  maxWidth,
} from 'react-native-stylex/media-query';

import {getWindowDimensions} from 'react-native-stylex/dimensions';
import {DeviceType} from 'react-native-device-info';
import {device} from 'src/config/screenSize';
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
const breakpoints = {
  xs: 360,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};
const {up, down, only, between} = createBreakpoints(breakpoints);
const applyBreakpoints = createBreakpointsMatcher(breakpoints, maxWidth);

export const theme = {
  palette: {textColor: 'black'},
  breakpoints: {up, down, only, between, apply: applyBreakpoints},
  layout: {
    fullHeight: () => getWindowDimensions().height,
    fullWidth: () => getWindowDimensions().width,
    get orientation() {
      return this.fullHeight() > this.fullWidth() ? 'Portrait' : 'Landscape';
    },

    heightRef: (x = 1) => {
      const {width, height} = getWindowDimensions();

      const HEIGHT =
        height > width ? devices[device].height : devices[device].width;

      return (height / HEIGHT) * x;
    },
    widthRef: (x = 1) => {
      const {width, height} = getWindowDimensions();

      const WIDTH =
        height > width ? devices[device].width : devices[device].height;

      return (width / WIDTH) * x;
    },
  },
  utils: {
    fade: (color, value) => {},
  },
};

export type MyTheme = typeof theme;
