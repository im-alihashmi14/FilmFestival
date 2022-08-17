import {
  createBreakpointsMatcher,
  createBreakpoints,
  maxWidth,
} from 'react-native-stylex/media-query';

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
  utils: {
    fade: (color, value) => {},
  },
};

export type MyTheme = typeof theme;
