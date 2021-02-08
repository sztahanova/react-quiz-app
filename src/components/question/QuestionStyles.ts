import { makeStyles } from "@material-ui/core";

// .timer-text {
//   background: rgb(230, 153, 12);
//   padding: 15px;
//   margin-top: 20px;
//   margin-right: 20px;
//   border: 5px solid rgb(255, 189, 67);
//   border-radius: 15px;
//   text-align: center;
// }

const useQuestionStyles = makeStyles((theme) => ({
  question: {
    gap: 10,
    minWidth: 250,
  },
  questionCount: {
    color: "grey",
    display: "inline-block",
  },
  questionNumber: {
    fontSize: 28,
  },
  answerContainer: {
    gap: 10,
    margin: "auto",
    width: "100%",
    minWidth: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  answer: {
    width: "100%",
    fontSize: 16,
    color: "white",
    display: "flex",
    padding: 5,
    justifyContent: "flex-start",
    textAlign: "left",
    borderWidth: 5,
    cursor: "pointer",

    "&:hover": {
      borderWidth: 5,
    },
  },
  correctAnswer: {
    backgroundColor: theme.palette.correct.main,

    "&:hover": {
      backgroundColor: theme.palette.correct.main,
    },
  },

  incorrectAnswer: {
    backgroundColor: theme.palette.incorrect.main,

    "&:hover": {
      backgroundColor: theme.palette.incorrect.main,
    },
  },
}));

export default useQuestionStyles;
