import { FC } from 'react';
import { createTheme, MuiThemeProvider } from '@material-ui/core';

import { ThemeProviderProps } from './types';
import { theme as mainTheme } from '../theme';

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, extendTheme }) => {
  const theme = extendTheme ? { extend: extendTheme, ...mainTheme } : mainTheme;
  // HACK: methods
  const generatedTheme = createTheme(theme as any);

  return <MuiThemeProvider theme={generatedTheme}>{children}</MuiThemeProvider>;
};
