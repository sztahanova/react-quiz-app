import { Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ScoreProps } from "../../types/type";
import useScoreStyles from "./ScoreStyles";

const Score = (props: ScoreProps) => {
  const history = useHistory();
  const styles = useScoreStyles();
  const { score, nrOfQuestions } = props;

  const handleClick = () => {
    history.push("/react-quiz-app/");
  };

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
      <Button variant="outlined" color="primary" className={styles.button} onClick={handleClick}>
        New quiz
      </Button>
    </div>
  );
};

export default Score;
