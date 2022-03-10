import { XColors } from './types';

const white = '#FFFFFF';
const gray100 = '#F5F9FF';
const gray600 = '#6D789F';
const gray300 = '#DDE6F6';
const gray500 = '#A1AACA';
const xSky = '#0A1334';

export const colors: XColors = {
  background: {
    default: gray100,
    gradient: 'radial-gradient(44% 44% at 50% 50%, #E0EDFF 0%, #F0F6FF 100%)',
    paper: white,
  },
  divider: {
    dark: gray500,
    main: gray300,
  },
  grey: {
    m100: gray100,
    m200: '#E6EFFE',
    m300: gray300,
    m400: '#C8D0E5',
    m50: '#FDFEFF',
    m500: gray500,
    m600: gray600,
    m700: '#4F5A84',
    m800: '#333E67',
    m900: xSky,
  },
  text: {
    disabled: '#AAB2CF',
    light: white,
    primary: xSky,
    secondary: '#4F5A84',
  },
  ui: {
    danger: {
      dark: '#AD1313',
      light: '#FFE3E3',
      main: '#DD1515',
    },
    information: {
      dark: '#1A38B0',
      light: '#D5DDFC',
      main: '#315AFE',
    },
    success: {
      dark: '#1C8B48',
      light: '#E1FAED',
      main: '#3FA96B',
    },
    warning: {
      dark: '#C3900C',
      light: '#FCF0DB',
      main: '#F4B231',
    },
  },
  xBlue: {
    dark: '#3B3BA6',
    light: '#7777F1',
    main: '#5555EE',
  },
  xOrange: {
    dark: '#B25700',
    light: '#FF9733',
    main: '#FF7D00',
  },
  xSpark: 'linear-gradient(56.45deg, #FF7D00 1.78%, #FC771C 16.06%, #F56565 51.07%, #EA4AD8 98.59%, #E640FF 104.65%)',
  xTinny: {
    dark: '#C424DC',
    light: '#EF81FF',
    main: '#E63FFF',
  },
};
