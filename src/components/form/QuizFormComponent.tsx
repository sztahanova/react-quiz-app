import React, { useState } from "react";
import useQuizStyles from "../quiz/QuizStyles";
import { Button, Container } from "@material-ui/core";
import CategorySelector from "./CategorySelectorComponent";
import DifficultySelector, { Difficulty } from "./DifficultySelectorComponent";
import QuestionNumberSelector from "./QuestionNumberSelectorComponent";

const QuizForm = () => {
  const styles = useQuizStyles();

  const [selectedCategoryID, setSelectedCategoryID] = useState<number>(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>("all");
  const [questionNumber, setQuestionNumber] = useState<number>(5);

  return (
    <Container className={styles.quiz} style={{ flexDirection: "column", gap: 25 }}>
      <CategorySelector selectedCategoryID={selectedCategoryID} setSelectedCategoryID={setSelectedCategoryID} />
      <DifficultySelector selectedDifficulty={selectedDifficulty} setSelectedDifficulty={setSelectedDifficulty} />
      <QuestionNumberSelector
        selectedCategoryID={selectedCategoryID}
        selectedDifficulty={selectedDifficulty}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
      <Button variant='contained' color='primary' style={{marginTop: 50}}>Start quiz</Button>
    </Container>
  );
};

export default QuizForm;
