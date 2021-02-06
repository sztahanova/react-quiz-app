import { useState } from "react";

type QuestionProps = {
  currentQuestion: number;
  nrOfQuestions: number;
  questionText: string;
  answers: string[];
  correctAnswer: string;
  handleAnswerButtonClick: (isCorrect: boolean) => void;
};

const Question = (props: QuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>();
  const [applyCustomClass, setApplyCustomClass] = useState<boolean>(false);

  const handleAnswerButtonClick = (answer: string) => {
    setSelectedAnswer(answer);
    setApplyCustomClass(true);

    setTimeout(() => {
      props.handleAnswerButtonClick(props.correctAnswer === answer);
      setSelectedAnswer(undefined);
      setApplyCustomClass(false);
    }, 1500);
  };

  const getCustomClassName = (answer: string) => {
    if (applyCustomClass) {
      switch (answer) {
        case props.correctAnswer:
          return "correct";
        case selectedAnswer:
          return "incorrect";
        default:
          return "";
      }
    }

    return "";
  };

  return (
    <>
      <div className="question-section">
        <div className="question-count">
          <span>Question {props.currentQuestion + 1}</span>/{props.nrOfQuestions}
        </div>
        <div className="question-text">{decodeURIComponent(props.questionText)}</div>
      </div>
      <div className="answer-section">
        {props.answers.map((answer) => {
          return (
            <button className={getCustomClassName(answer)} onClick={() => handleAnswerButtonClick(answer)}>
              {decodeURIComponent(answer)}
            </button>
          );
        })}
      </div>
    </>
  );
};
export default Question;
