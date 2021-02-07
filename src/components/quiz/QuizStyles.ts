import { makeStyles } from "@material-ui/core";

const useQuizStyles = makeStyles(theme => ({
    quiz: {
      backgroundColor: theme.palette.secondary.main,
      minWidth: 450,
      minHeight: 250,
      borderRadius: 15,
      padding: 20,
      boxShadow: "10px 10px 42px 0px rgba(0, 0, 0, 0.75)",
      display: "flex",
      justifyContent: "space-evenly",
    },
  }));

  export default useQuizStyles;