type ScoreProps = {
  score: number;
  nrOfQuestions: number;
  handleButtonClick: () => void;
};

const Score = (props: ScoreProps) => {
  const { score, nrOfQuestions, handleButtonClick } = props;

  return (
    <div className="score-section">
      You scored {score} out of {nrOfQuestions}
      <button onClick={() => handleButtonClick()}>New quiz</button>
    </div>
  );
};

export default Score;
