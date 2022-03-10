import { DefaultPaletteOptions } from './types';
import { colors } from './colors';

export const palette: DefaultPaletteOptions = {
  background: {
    default: colors.background.default,
    gradient: colors.background.gradient,
    paper: colors.background.paper,
  },
  common: {
    black: colors.grey.m900,
    white: colors.text.light,
  },
  error: {
    dark: colors.ui.danger.dark,
    light: colors.ui.danger.light,
    main: colors.ui.danger.main,
  },
  gradient: colors.xSpark,
  grey: {
    100: colors.grey.m100,
    200: colors.grey.m200,
    300: colors.grey.m300,
    400: colors.grey.m400,
    50: colors.grey.m50,
    500: colors.grey.m500,
    600: colors.grey.m600,
    700: colors.grey.m700,
    800: colors.grey.m800,
    900: colors.grey.m900,
  },
  info: {
    dark: colors.ui.information.dark,
    light: colors.ui.information.light,
    main: colors.ui.information.main,
  },
  primary: {
    dark: colors.xBlue.dark,
    light: colors.xBlue.light,
    main: colors.xBlue.main,
  },
  secondary: {
    dark: colors.xTinny.dark,
    light: colors.xTinny.light,
    main: colors.xTinny.main,
  },
  success: {
    dark: colors.ui.success.dark,
    light: colors.ui.success.light,
    main: colors.ui.success.main,
  },
  tertiary: {
    dark: colors.xOrange.dark,
    light: colors.xOrange.light,
    main: colors.xOrange.main,
  },
  text: {
    disabled: colors.text.disabled,
    light: colors.text.light,
    primary: colors.text.primary,
    secondary: colors.text.secondary,
  },
  warning: {
    dark: colors.ui.warning.dark,
    light: colors.ui.warning.light,
    main: colors.ui.warning.main,
  },
  xDivider: {
    dark: colors.divider.dark,
    main: colors.divider.main,
  },
};
