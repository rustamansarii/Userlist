import {Dimensions, PixelRatio} from 'react-native';

const {width, height, fontScale} = Dimensions.get('window');
let SCREEN_WIDTH = width; // get current width
let SCALE = fontScale; // constant, 375 is standard width of  iphone 6 / 7 / 8
const widthBaseScale = width / 414;
const heightBaseScale = height / 896;
function normalize(size, based = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
//for width  pixel
const widthP = size => {
  return normalize(size, 'width');
};
//for height  pixel
const heightP = size => {
  return normalize(size, 'height');
};
//for font  pixel
const fontP = size => {
  return heightP(size);
};
//for Margin and Padding vertical pixel
const verticalP = size => {
  return heightP(size);
};
//for Margin and Padding horizontal pixel
const horizontalP = size => {
  return widthP(size);
};
export {widthP, heightP, fontP, verticalP, horizontalP};
