import React, { useCallback, useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { shuffle } from "../../utils";
import Loading from "../LoadingComponent";
import NoData from "../NoDataComponent";
import Question from "../question/QuestionComponent";
import Score from "../score/ScoreComponent";
import useQuizStyles from "./QuizStyles";
import { QUIZ_API } from "../../quizApi";
import { useSelector } from "react-redux";
import { QuizApiResult, QuizFormState } from "../../types/type";

const Quiz = () => {
  const styles = useQuizStyles();

  const selectedCategoryID = useSelector((state: QuizFormState) => state.categoryID);
  const selectedDifficulty = useSelector((state: QuizFormState) => state.difficulty);
  const questionNumber = useSelector((state: QuizFormState) => state.questionNUmber);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questionList, setQuestionList] = useState<QuizApiResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getQuestionList = useCallback(() => {
    setLoading(true);

    const baseLink = `${QUIZ_API}?type=multiple&encode=url3986`;
    const categoryPart = selectedCategoryID === 0 ? "" : `&category=${selectedCategoryID}`;
    const difficultyPart = selectedDifficulty === "all" ? "" : `&difficulty=${selectedDifficulty}`;
    const questionNumberPart = `&amount=${questionNumber}`;

    const link = `${baseLink}${categoryPart}${difficultyPart}${questionNumberPart}`;

    fetch(link)
      .then((result) => result.json())
      .then((result) => {
        if (result.response_code === 0) {
          setQuestionList(result.results);
        }
        setLoading(false);
      });
  }, [selectedCategoryID, selectedDifficulty, questionNumber]);
  useEffect(() => getQuestionList(), [getQuestionList]);

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
