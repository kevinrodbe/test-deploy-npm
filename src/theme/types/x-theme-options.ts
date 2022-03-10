import { Overrides } from '@material-ui/core/styles/overrides';
import { ThemeOptions } from '@material-ui/core';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

import { DefaultPaletteOptions } from './default-palette-options';

export interface XThemeOptions extends ThemeOptions {
  palette: DefaultPaletteOptions;
  typography: TypographyOptions;
  overrides: Overrides;
}
