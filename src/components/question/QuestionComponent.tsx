import { useState } from "react";
import { Button, Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import useQuestionStyles from "./QuestionStyles";

type QuestionProps = {
  currentQuestion: number;
  nrOfQuestions: number;
  questionText: string;
  answers: string[];
  correctAnswer: string;
  handleAnswerButtonClick: (isCorrect: boolean) => void;
};

const Question = (props: QuestionProps) => {
  const styles = useQuestionStyles();

  const [selectedAnswer, setSelectedAnswer] = useState<string>();
  const [applyCustomClass, setApplyCustomClass] = useState<boolean>(false);
  const [disableButtons, setDisableButtons] = useState<boolean>(false);

  const handleAnswerButtonClick = (answer: string) => {
    if (!disableButtons) {
      setDisableButtons(true);
      setSelectedAnswer(answer);
      setApplyCustomClass(true);
  
      setTimeout(() => {
        props.handleAnswerButtonClick(props.correctAnswer === answer);
        setSelectedAnswer(undefined);
        setApplyCustomClass(false);
        setDisableButtons(false);
      }, 1000);
    }
  };

  const getCustomClassName = (answer: string) => {
    if (applyCustomClass) {
      switch (answer) {
        case props.correctAnswer:
          return styles.correctAnswer;
        case selectedAnswer:
          return styles.incorrectAnswer;
        default:
          return "";
      }
    }

    return "";
  };

  return (
    <Grid container>
      <Grid item sm={5} className={styles.question}>
        <Grid item>
          <div>
            <Typography variant="button" gutterBottom className={`${styles.questionCount} ${styles.questionNumber}`}>
              Question {props.currentQuestion + 1}
            </Typography>
            <Typography variant="h6" gutterBottom className={styles.questionCount}>
              /{props.nrOfQuestions}
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" display="block" gutterBottom>
            {decodeURIComponent(props.questionText)}
          </Typography>
        </Grid>
      </Grid>
      <Grid item sm={5} className={styles.answerContainer}>
        {props.answers.map((answer) => {
          return (
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                className={`${styles.answer} ${getCustomClassName(answer)}`}
                onClick={() => handleAnswerButtonClick(answer)}
              >
                {decodeURIComponent(answer)}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
export default Question;
