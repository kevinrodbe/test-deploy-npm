import { XThemeOptions } from './types';
import { typography as oldTypography } from './typography';
import { overrides } from './overrides';
import { palette } from './palette';

export const theme: XThemeOptions = {
  overrides,
  palette,
  typography: oldTypography,
};
