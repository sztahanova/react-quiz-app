import React, { useCallback, useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { shuffle } from "../../utils";
import Loading from "../LoadingComponent";
import NoData from "../NoDataComponent";
import Question from "../question/QuestionComponent";
import Score from "../score/ScoreComponent";
import useQuizStyles from "./QuizStyles";

type QuizApiResult = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

const Quiz = () => {
  const styles = useQuizStyles();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questionList, setQuestionList] = useState<QuizApiResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => getQuestionList(), []);

  const getQuestionList = useCallback(() => {
    setLoading(true);

    fetch("https://opentdb.com/api.php?amount=5&type=multiple&encode=url3986")
      .then((result) => result.json())
      .then((result) => {
        if (result.response_code === 0) {
          setQuestionList(result.results);
        }
        setLoading(false);
      });
  }, []);

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    const nextQuestion = currentQuestion + 1;

    if (isCorrect) {
      setScore(score + 1);
    }

    if (nextQuestion < questionList.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleNewQuizButtonClick = () => {
    setShowScore(false);
    getQuestionList();
    setCurrentQuestion(0);
    setScore(0);
  };

  const finalChild = () => {
    if (showScore) {
      return <Score score={score} nrOfQuestions={questionList.length} handleButtonClick={handleNewQuizButtonClick} />;
    } else if (loading) {
      return <Loading />;
    } else if (questionList.length === 0) {
      return <NoData />;
    } else {
      return (
        <Question
          currentQuestion={currentQuestion}
          nrOfQuestions={questionList.length}
          questionText={questionList[currentQuestion].question}
          answers={shuffle([
            questionList[currentQuestion].correct_answer,
            ...questionList[currentQuestion].incorrect_answers,
          ])}
          correctAnswer={questionList[currentQuestion].correct_answer}
          handleAnswerButtonClick={handleAnswerButtonClick}
        />
      );
    }
  };

  return <Container className={styles.quiz}>{finalChild()}</Container>;
};

export default Quiz;
