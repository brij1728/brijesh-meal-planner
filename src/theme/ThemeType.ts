import { fontSizes, primaryColors, secondaryColors } from './theme';

export interface ThemeType {
  primaryColors: { [key in keyof typeof primaryColors]: string };
  secondaryColors: { [key in keyof typeof secondaryColors]: string };
  fontSizes: {
    [key in keyof typeof fontSizes]?: (typeof fontSizes)[key] extends object
      ? Partial<(typeof fontSizes)[key]>
      : (typeof fontSizes)[key] extends object | null
      ? Partial<(typeof fontSizes)[key]> | null
      : (typeof fontSizes)[key] extends object | null | undefined
      ? Partial<(typeof fontSizes)[key]> | null | undefined
      : (typeof fontSizes)[key];
  };
  space: string[];
  fonts: { [key: string]: string };
}
