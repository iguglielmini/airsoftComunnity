import 'styled-components';

declare module 'styled-components' {
  interface Fonts {
    bold: number;
    light: number;
    normal: number;
    semiBold: number;
    fontBold: string;
    fontNormal: string;
  }

  export interface DefaultTheme {
    fonts: Fonts;
    colors: {
      [key in string]: {
        [color in string]: string;
      };
    };
  }
}
