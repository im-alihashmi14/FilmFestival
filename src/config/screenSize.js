import {Dimensions} from 'react-native';
const fullHeight = Dimensions.get('window').height;
const heightRef = fullHeight / 800;
const fontRef = fullHeight / 800;
const fullWidth = Dimensions.get('window').width;
const widthRef = fullWidth / 428;
export {fullWidth, fullHeight, heightRef, widthRef, fontRef};
