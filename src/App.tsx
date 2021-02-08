import React from "react";
import { Container } from "@material-ui/core";
import Quiz from "./components/quiz/QuizComponent";
import QuizForm from "./components/form/QuizFormComponent";
import { Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Container className="app">
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/react-quiz-app" />} />
        <Route exact path="/quiz" component={() => <Redirect to="/react-quiz-app/quiz" />} />
        <Route exact path="/react-quiz-app" component={() => <QuizForm />} />
        <Route exact path="/react-quiz-app/quiz" component={() => <Quiz />} />
      </Switch>
    </Container>
  );
};

export default App;
