import { makeStyles } from "@material-ui/core";

const useScoreStyles = makeStyles({
  score: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  button: {
      borderWidth: 3,
      
      "&:hover": {
        borderWidth: 3,
      },
  }
});

export default useScoreStyles;
