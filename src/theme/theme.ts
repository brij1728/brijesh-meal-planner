import { DefaultTheme } from '@react-navigation/native';
import { ThemeType } from './ThemeType';

export const primaryColors = {
  primaryActive: '#FF5500',
  primaryInactive: '#FF5A10',
  primaryText: '#333533',
  primaryBackground: '#FFFFFF',
  primaryHeader: '#FFCBA4',
  primaryShadow: '#000000',
};

export const secondaryColors = {
  secondary_01: 'red',
  secondary_02: 'yellow',
  secondary_03: ' #0e0e0e',
  secondaryBackground: '#ff0000',
  ingredientTextBackground: '#fff',
};

export const space = [
  '0',
  '.4rem',
  '.8rem',
  '1.2rem',
  '1.6rem',
  '2.0rem',
  '3.2rem',
  '4.8rem',
  '6.4rem',
  '9.6rem',
];

export const fontSizes = {
  small: 14,
  medium: 16,
  large: 18,
  h5: {
    sm: 12,
    md: 14,
    lg: 16,
  },
  h4: {
    sm: 16,
    md: 18,
    lg: 22,
  },
  h3: {
    sm: 19,
    md: 22,
    lg: 28,
  },
  h2: {
    sm: 20,
    md: 22,
    lg: 24,
  },
  h1: {
    sm: 24,
    md: 26,
    lg: 30,
  },
};

export const fonts = {
  regular: 'Helvetica Neue, sans-serif',
  bold: 'Helvetica Neue Bold, sans-serif',
};

export const lightTheme: ThemeType = {
  fontSizes,
  primaryColors,
  secondaryColors,
  space,
  fonts,
};

export const darkTheme: ThemeType = {
  fontSizes,
  primaryColors,
  secondaryColors,
  space,
  fonts,
};

export const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: primaryColors.primaryBackground,
  },
};
