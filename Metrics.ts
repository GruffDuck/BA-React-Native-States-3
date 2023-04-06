import { Dimensions } from 'react-native';
const {
    width,
    height,
  } = Dimensions.get('window');
  
  const measureWidth = (size: number) => (size * width) / 360;
  const measureHeight = (size: number) => (size * height) / 640;
  
  export const Metrics = {
    width,
    height,
    measureWidth,
    measureHeight,
  };
  