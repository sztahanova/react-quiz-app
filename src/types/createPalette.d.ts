import * as createPalette from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    correct: PaletteColor;
    incorrect: PaletteColor;
  }

  interface PaletteOptions {
    correct: PaletteColorOptions;
    incorrect: PaletteColorOptions;
  }
}
