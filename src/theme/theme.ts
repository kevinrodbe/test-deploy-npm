import { XThemeOptions } from './types';
import { typography as oldTypography } from './typography';
import { overrides } from './overrides';
import { palette } from './palette';

const theme: XThemeOptions = {
  overrides,
  palette,
  typography: oldTypography,
};

export default theme;
