import { ReactNode } from 'react';

export type ThemeProviderProps = {
  children?: ReactNode;
  extendTheme?: { [key: string]: any };
};
