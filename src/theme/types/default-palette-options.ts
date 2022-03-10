import {
  CommonColors,
  PaletteOptions,
  SimplePaletteColorOptions,
  TypeBackground,
  TypeText,
} from '@material-ui/core/styles/createPalette';

import { TripleGradient } from './triple-gradient';

interface XBackground extends Partial<TypeBackground> {
  gradient: string;
}

interface XText extends Partial<TypeText> {
  light: string;
}

export interface DefaultPaletteOptions extends PaletteOptions {
  primary: SimplePaletteColorOptions;
  secondary: SimplePaletteColorOptions;
  tertiary: SimplePaletteColorOptions;
  error: SimplePaletteColorOptions;
  warning: SimplePaletteColorOptions;
  info: SimplePaletteColorOptions;
  success: SimplePaletteColorOptions;
  common: Partial<CommonColors>;
  xDivider: TripleGradient;
  gradient: string;
  background: XBackground;
  text: XText;
}
