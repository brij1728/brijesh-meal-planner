import { hexToHSL } from './hextohsl';
import { primaryColors } from '../../theme';

type ThemeColorKeys = keyof typeof primaryColors;

export const getRandomColorForString = (str: string): string => {
  // always return the same hex code for the same strings
  const hash = str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const themeKeys: ThemeColorKeys[] = [
    'primaryHeader',
    'primaryActive',
    'primaryBackground',
  ];
  const selectedColorKey = themeKeys[hash % themeKeys.length];

  const selectedColor = primaryColors[selectedColorKey]; // This now should be error-free

  const [h, s, l] = hexToHSL(selectedColor);
  const adjustedHue = (h + (hash % 30)) % 360; // Adjust the hue by up to 30 degrees
  const adjustedSaturation = Math.min(s, 70); // Cap saturation to 70% for muted colors
  const adjustedLightness = l > 50 ? l - 10 : l + 10; // Adjust lightness based on the existing lightness

  return `hsl(${adjustedHue}, ${adjustedSaturation}%, ${adjustedLightness}%)`;
};
