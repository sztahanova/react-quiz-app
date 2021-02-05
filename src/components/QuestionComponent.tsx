type QuestionProps = {
  currentQuestion: number;
  nrOfQuestions: number;
  questionText: string;
  answers: string[];
  correctAnswer: string;
  handleAnswerButtonClick: (isCorrect: boolean) => void;
};

const Question = (props: QuestionProps) => {
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
            <button onClick={() => props.handleAnswerButtonClick(props.correctAnswer === answer)}>
              {decodeURIComponent(answer)}
            </button>
          );
        })}
      </div>
    </>
  );
};
export default Question;
