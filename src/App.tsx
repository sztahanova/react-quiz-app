import React from "react";
import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
import Quiz from "./components/quiz/QuizComponent";
import theme from "./theme";
import QuizForm from './components/form/QuizFormComponent';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className="app">
        {/* <Quiz /> */}
        <QuizForm />
      </Container>
    </ThemeProvider>
  );
};

export default App;
