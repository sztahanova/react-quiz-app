import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#c1d354",
    },
    primary: {
      main: "#c1d354",
      contrastText: "#34495e",
    },
    secondary: {
      main: "#34495e",
    },
    text: {
      primary: "#34495e",
    },
    correct: {
      main: "#2f922f",
    },
    incorrect: {
      main: "#ff3333",
    },
  },
});

export default theme;
