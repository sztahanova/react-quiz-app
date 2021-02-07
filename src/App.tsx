import React from "react";
import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
import Quiz from "./components/quiz/QuizComponent";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className="app">
        <Quiz />
      </Container>
    </ThemeProvider>
  );
};

export default App;
