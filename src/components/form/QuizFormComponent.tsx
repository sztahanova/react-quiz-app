import React from "react";
import useQuizStyles from "../quiz/QuizStyles";
import { Button, Container } from "@material-ui/core";
import CategorySelector from "./CategorySelectorComponent";
import DifficultySelector from "./DifficultySelectorComponent";
import QuestionNumberSelector from "./QuestionNumberSelectorComponent";
import { useHistory } from "react-router-dom";
import useFormControlStyle from "./FormControlStyle";

const QuizForm = () => {
  const history = useHistory();
  const quizStyles = useQuizStyles();
  const formStyles = useFormControlStyle();

  const handleClick = () => {
    history.push("/react-quiz-app/quiz");
  };

  return (
    <Container className={`${quizStyles.quiz} ${formStyles.quizForm}`}>
      <CategorySelector />
      <DifficultySelector />
      <QuestionNumberSelector />
      <Button variant="contained" color="primary" style={{ marginTop: 50 }} onClick={handleClick}>
        Start quiz
      </Button>
    </Container>
  );
};

export default QuizForm;
