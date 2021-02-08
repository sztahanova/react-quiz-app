import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDifficulty } from "../../store/actionCreators";
import { Difficulty, QuizFormState } from "../../types/type";
import useFormControlStyle from "./FormControlStyle";

const DifficultySelector = () => {
  const dispatch = useDispatch();
  const style = useFormControlStyle();

  const selectedDifficulty = useSelector((state: QuizFormState) => state.difficulty);
  const setSelectedDifficulty = useCallback((difficulty: Difficulty) => dispatch(setDifficulty(difficulty)), [
    dispatch,
  ]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedDifficulty(event.target.value as Difficulty);
  };

  return (
    <FormControl variant="outlined" color="primary" className={style.formControl}>
      <InputLabel id="difficulty-selector-label">Difficulty</InputLabel>
      <Select
        labelId="difficulty-selector-label"
        id="difficulty-selector"
        label="difficulty"
        value={selectedDifficulty}
        onChange={handleChange}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="easy">Easy</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="hard">Hard</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DifficultySelector;
