import { createMuiTheme } from "@material-ui/core/styles";

const primary = "#c1d354";
const secondary = "#34495e";
const correct = "#2f922f";
const incorrect = "#ff3333";
const white = "#ffffff";

const theme = createMuiTheme({
  palette: {
    background: {
      default: primary,
    },
    primary: {
      main: primary,
      contrastText: secondary,
    },
    secondary: {
      main: secondary,
      contrastText: white,
    },
    text: {
      primary: secondary,
    },
    correct: {
      main: correct,
    },
    incorrect: {
      main: incorrect,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderWidth: 5,
      },
    },
    MuiFormLabel: {
      root: {
        color: white,
      },
    },
    MuiOutlinedInput: {
      input: {
        color: white,
      },
      root: {
        "& $notchedOutline": {
          borderColor: primary,
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: primary,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderColor: primary,
          },
        },
        "&$focused $notchedOutline": {
          borderColor: primary,
          borderWidth: 1,
        },
      },
    },
    // Applied to the <ul> element
    MuiMenu: {
      list: {
        backgroundColor: secondary,
      },
    },
    // Applied to the <li> elements
    MuiMenuItem: {
      root: {
        backgroundColor: secondary,
      },
    },
    MuiSlider: {
      root: {
        "&$disabled $thumb": {
          color: 'grey',
        },
        "&$disabled $track": {
          color: 'grey',
        },
      },
      thumb: {
        color: primary,
      },
      track: {
        color: primary,
      },
    },
  },
});

export default theme;
