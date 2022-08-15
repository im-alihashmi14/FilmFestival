import {StyleSheet as RNStylesheet} from 'react-native';

declare namespace CustomStyleSheet {
  let views: any;
}

// apply additional types to origFc and export again
export const StyleSheet: typeof CustomStyleSheet & typeof RNStylesheet =
  RNStylesheet as any;
