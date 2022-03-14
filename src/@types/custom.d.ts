// import '@material-ui/core/styles/createTypography';
// import '@material-ui/core/styles/createTheme';
// import '@material-ui/core/styles/createPalette';

// import { theme } from '../theme';

// type CustomTheme = {
//   [Key in keyof typeof theme]: typeof theme[Key];
// };

// const { overrides, palette, typography, ...rest } = theme;

// type ExtendMUITheme = typeof rest;
// type PaletteType = typeof palette;
// type OverridesType = typeof overrides;
// type TypographyType = typeof typography;
// type BackgroundType = typeof palette.background;
// type CommonType = typeof palette.common;
// type TonalOffsetType = typeof palette.tonalOffset;
// type GreyColorType = typeof palette.grey;
// type TextType = typeof palette.text;

// declare module '*.svg' {
//   const content: any;

//   export default content;
// }

// declare module '@material-ui/core/styles/createTheme' {
//   export interface Theme extends ExtendMUITheme {
//     extend?: { [key: string]: any };
//   }

//   export interface ThemeOptions extends RestThemeType {
//     extend?: { [key: string]: any };
//   }
// }

// declare module '@material-ui/core/styles/createPalette' {
//   export interface PaletteOptions extends PaletteType {}
//   export interface Palette extends PaletteType {}
//   export interface TypeBackground extends BackgroundType {}
//   export interface CommonColors extends CommonType {}
//   export interface PaletteTonalOffset extends TonalOffsetType {}
//   export interface TypeText extends TextType {}
//   export interface ColorPartial extends GreyColorType {}
// }

// declare module '@material-ui/core' {
//   export interface Color extends GreyColorType {}
// }
// declare module '@material-ui/core/styles/createTypography' {
//   export interface Typography extends TypographyType {}
//   export interface TypographyOptions extends TypographyType {}
// }

// declare module '@material-ui/core/styles/overrides' {
//   export interface Overrides extends OverridesType {}
// }

// test2
// declare module '@material-ui/core/styles/createTheme' {
//   export interface Theme extends CustomTheme {
//     extend?: { [key: string]: any };
//   }

//   export interface ThemeOptions extends CustomTheme {
//     extend?: { [key: string]: any };
//   }

//   export function createTheme(options?: ThemeOptions): Theme;
// }
