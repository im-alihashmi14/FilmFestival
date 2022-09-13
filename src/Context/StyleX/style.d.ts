import 'react-native-stylex';
import type {MyTheme} from './theme';

declare module 'react-native-stylex' {
  export interface DefaultTheme extends MyTheme {}
}
