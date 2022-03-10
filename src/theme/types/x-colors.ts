import { ColorScale } from './color-scale';
import { TripleGradient } from './triple-gradient';

export interface XColors {
  xBlue: TripleGradient;
  xOrange: TripleGradient;
  xTinny: TripleGradient;
  xSpark: string;
  ui: {
    danger: TripleGradient;
    success: TripleGradient;
    warning: TripleGradient;
    information: TripleGradient;
  };
  grey: ColorScale;
  divider: TripleGradient;
  text: {
    primary: string;
    secondary: string;
    light: string;
    disabled: string;
  };
  background: {
    paper: string;
    default: string;
    gradient: string;
  };
}
