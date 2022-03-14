import { FC } from 'react';
import { MuiThemeProvider } from '@material-ui/core';

import { ThemeProviderProps } from './types';
import { theme as mainTheme } from '../theme';

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, extendTheme }) => {
  const theme = extendTheme ? { extend: extendTheme, ...mainTheme } : mainTheme;

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
