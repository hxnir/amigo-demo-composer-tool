function hexToRgba(hex: string, alpha: number = 1) {
  const parsedHex =
    hex.length === 3
      ? hex
          .split('')
          .map((char) => char + char)
          .join('')
      : hex.replace(/^#/, '');

  if (parsedHex.length !== 6) {
    throw new Error(`Invalid hex passed ${hex}`);
  }

  const r = parseInt(parsedHex.slice(0, 2), 16);
  const g = parseInt(parsedHex.slice(2, 4), 16);
  const b = parseInt(parsedHex.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const WHITE = '#ffffff';
const GRAY_300 = '#d3d3d9';
const GRAY_600 = '#504e5f';
const PURPLE_300 = '#C4C2FF';
const PURPLE_600 = '#322EE0';
const RED_300 = '#FDA29B';
const RED_600 = '#D92D20';
const ORANGE_300 = '#F7B27A';
const ORANGE_600 = '#E04F16';
const YELLOW_300 = '#FDE272';
const YELLOW_600 = '#CA8504';
const GREEN_300 = '#6CE9A6';
const GREEN_600 = '#039855';

export const COLORS: { [key: string]: { [key: number]: string } } = {
  low: '#F6EFDC',
  white: WHITE,
  black: '#000000',
  gray: {
    25: '#fcfcfd',
    50: '#f9f9fa',
    100: '#f4f4f5',
    200: '#ececef',
    250: '#e0e0e5',
    300: GRAY_300,
    350: '#b8b7c2',
    400: '#a19fad',
    500: '#6e6c7f',
    600: GRAY_600,
    700: '#3f3e4c',
    800: '#262531',
    900: '#191820',
  },
  whiteAlpha: {
    10: hexToRgba(WHITE, 0.1),
    20: hexToRgba(WHITE, 0.2),
    40: hexToRgba(WHITE, 0.4),
    60: hexToRgba(WHITE, 0.6),
    80: hexToRgba(WHITE, 0.8),
  },
  gray300Alpha: {
    10: hexToRgba(GRAY_300, 0.1),
    20: hexToRgba(GRAY_300, 0.2),
    40: hexToRgba(GRAY_300, 0.4),
    60: hexToRgba(GRAY_300, 0.6),
    80: hexToRgba(GRAY_300, 0.8),
  },
  gray600Alpha: {
    10: hexToRgba(GRAY_600, 0.1),
    20: hexToRgba(GRAY_600, 0.2),
    40: hexToRgba(GRAY_600, 0.4),
    60: hexToRgba(GRAY_600, 0.6),
    80: hexToRgba(GRAY_600, 0.8),
  },
  purple: {
    50: '#F3F3FF',
    100: '#E7E6FE',
    200: '#DCDBFF',
    300: PURPLE_300,
    400: '#8C8AFF',
    500: '#5F5BFF',
    600: PURPLE_600,
    700: '#201BB1',
    800: '#1A16C7',
    900: '#1A16C7',
  },
  purple300Alpha: {
    10: hexToRgba(PURPLE_300, 0.1),
    20: hexToRgba(PURPLE_300, 0.2),
    40: hexToRgba(PURPLE_300, 0.4),
    60: hexToRgba(PURPLE_300, 0.6),
    80: hexToRgba(PURPLE_300, 0.8),
  },
  purple600Alpha: {
    10: hexToRgba(PURPLE_600, 0.1),
    20: hexToRgba(PURPLE_600, 0.2),
    40: hexToRgba(PURPLE_600, 0.4),
    60: hexToRgba(PURPLE_600, 0.6),
    80: hexToRgba(PURPLE_600, 0.8),
  },
  red: {
    50: '#FEF3F2',
    100: '#FEE4E2',
    200: '#FECDCA',
    300: RED_300,
    400: '#F97066',
    500: '#F04438',
    600: RED_600,
    700: '#B42318',
    900: '#7A271A',
  },
  red300Alpha: {
    10: hexToRgba(RED_300, 0.1),
    20: hexToRgba(RED_300, 0.2),
    40: hexToRgba(RED_300, 0.4),
    60: hexToRgba(RED_300, 0.6),
    80: hexToRgba(RED_300, 0.8),
  },
  red600Alpha: {
    10: hexToRgba(RED_600, 0.1),
    20: hexToRgba(RED_600, 0.2),
    40: hexToRgba(RED_600, 0.4),
    60: hexToRgba(RED_600, 0.6),
    80: hexToRgba(RED_600, 0.8),
  },
  legacyOrange: {
    50: '#FFFAEB',
    200: '#FEDF89',
    300: '#FEC84B',
    500: '#F79009',
    700: '#B54708',
    900: '#7A2E0E',
  },
  orange: {
    50: '#FEF6EE',
    100: '#FDEAD7',
    200: '#F9DBAF',
    300: ORANGE_300,
    400: '#F38744',
    500: '#EF6820',
    600: ORANGE_600,
    700: '#B93815',
    900: '#772917',
  },
  orange300Alpha: {
    10: hexToRgba(ORANGE_300, 0.1),
    20: hexToRgba(ORANGE_300, 0.2),
    40: hexToRgba(ORANGE_300, 0.4),
    60: hexToRgba(ORANGE_300, 0.6),
    80: hexToRgba(ORANGE_300, 0.8),
  },
  orange600Alpha: {
    10: hexToRgba(ORANGE_600, 0.1),
    20: hexToRgba(ORANGE_600, 0.2),
    40: hexToRgba(ORANGE_600, 0.4),
    60: hexToRgba(ORANGE_600, 0.6),
    80: hexToRgba(ORANGE_600, 0.8),
  },
  yellow: {
    50: '#FEFBE8',
    100: '#FEF7C3',
    200: '#FEEE95',
    300: YELLOW_300,
    400: '#FAC515',
    500: '#EAAA08',
    600: YELLOW_600,
    700: '#A15C07',
    900: '#713B12',
  },
  yellow300Alpha: {
    10: hexToRgba(YELLOW_300, 0.1),
    20: hexToRgba(YELLOW_300, 0.2),
    40: hexToRgba(YELLOW_300, 0.4),
    60: hexToRgba(YELLOW_300, 0.6),
    80: hexToRgba(YELLOW_300, 0.8),
  },
  yellow600Alpha: {
    10: hexToRgba(YELLOW_600, 0.1),
    20: hexToRgba(YELLOW_600, 0.2),
    40: hexToRgba(YELLOW_600, 0.4),
    60: hexToRgba(YELLOW_600, 0.6),
    80: hexToRgba(YELLOW_600, 0.8),
  },
  green: {
    50: '#ECFDF3',
    100: '#D1FADF',
    200: '#A6F4C5',
    300: GREEN_300,
    400: '#32D583',
    500: '#12B76A',
    600: GREEN_600,
    700: '#027A48',
    900: '#054F31',
  },
  green300Alpha: {
    10: hexToRgba(GREEN_300, 0.1),
    20: hexToRgba(GREEN_300, 0.2),
    40: hexToRgba(GREEN_300, 0.4),
    60: hexToRgba(GREEN_300, 0.6),
    80: hexToRgba(GREEN_300, 0.8),
  },
  green600Alpha: {
    10: hexToRgba(GREEN_600, 0.1),
    20: hexToRgba(GREEN_600, 0.2),
    40: hexToRgba(GREEN_600, 0.4),
    60: hexToRgba(GREEN_600, 0.6),
    80: hexToRgba(GREEN_600, 0.8),
  },
  graph: {
    50: '#5CBC8C',
    100: '#71CCAA',
    200: '#8FE0CC',
    300: '#AAEEE3',
    400: '#AADDEE',
    500: '#97C7E2',
    600: '#7CA6D0',
    700: '#627EB7',
    800: '#424E8A',
    900: '#373460',
  },
};

COLORS.brand = COLORS.purple;
COLORS.primary = COLORS.brand;
COLORS.neutrals = COLORS.gray;
COLORS.title = COLORS.gray['700'];
COLORS.subtitle = COLORS.gray['500'];
COLORS.placeholder = COLORS.gray['400'];
COLORS.disabledText = COLORS.gray['400'];
COLORS.borderLight = COLORS.gray['200'];
COLORS.border = COLORS.gray['250'];
COLORS.borderDark = COLORS.gray['300'];
COLORS.borderHover = COLORS.gray['350'];

COLORS.medium = COLORS.orange['200'];
COLORS.high = COLORS.orange['500'];
COLORS.critical = COLORS.red['500'];
COLORS.hover = COLORS.gray['50'];
COLORS.pageBackground = COLORS.white;
COLORS.link = COLORS.primary['500'];

export function rgbaFromHexColor(color: string, alpha: number) {
  const r = Number(`0x${color.slice(1, 3)}`);
  const g = Number(`0x${color.slice(3, 5)}`);
  const b = Number(`0x${color.slice(5, 7)}`);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
} 