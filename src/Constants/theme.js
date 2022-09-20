import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#371F6A',
  secendrary: '#8200d6',
  black: '#000000',
  white: '#FFFFFF',
  lightWhite: '#ECECEC',
  gray: '#6A6A6A',
  blue: '#0682FE',
  lightblue: '#9AC4F8',
  green: '#00B761',
  lightGreen: '#31A05F',
  orange: '#EF9924',
  orangeDark: '#E07A1F',
  lightOrange: '#FFCA5F',
  red: '#FF0000',
  lightRed: '#FF9D9D',
  darkGrey: '#686874',
  ligthGrey: '#C8C8D5',
  softWhite: '#F2F2F8',
  softBlack: '#1b1a21',
  greySolid: '#c2c1c9',
  ubeSolid: '#9582cc',
  darkGreen: '#4e8a78',
  darkRed: '#DF0100',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};

const appTheme = {COLORS, SIZES};

export default appTheme;
