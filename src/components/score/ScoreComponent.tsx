import { Button, Typography } from "@material-ui/core";
import useScoreStyles from "./ScoreStyles";

type ScoreProps = {
  score: number;
  nrOfQuestions: number;
  handleButtonClick: () => void;
};

const Score = (props: ScoreProps) => {
  const styles = useScoreStyles();
  const { score, nrOfQuestions, handleButtonClick } = props;

  return (
    <div className={styles.score}>
      <Typography variant="button" gutterBottom>
        You scored
      </Typography>
      <Typography variant="h3" color="primary" gutterBottom>
        {score}
      </Typography>
      <Typography variant="button">out of</Typography>
      <Typography variant="h3" gutterBottom>
        {nrOfQuestions}
      </Typography>
      <Button variant="outlined" color="primary" className={styles.button} onClick={() => handleButtonClick()}>
        New quiz
      </Button>
    </div>
  );
};

export default Score;
