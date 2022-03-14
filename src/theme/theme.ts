import { typography as oldTypography } from './typography';
import { overrides } from './overrides';
import { palette } from './palette';

const theme = {
  overrides,
  palette,
  typography: oldTypography,
};

// HACK: required for type
export default theme;
