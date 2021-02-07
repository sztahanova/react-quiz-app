import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";
import useFormControlStyle from "./FormControlStyle";

export type Difficulty = "easy" | "medium" | "hard" | "all";

type DifficultySelectorProps = {
  selectedDifficulty?: Difficulty;
  setSelectedDifficulty: (difficulty: Difficulty) => void;
};

const DifficultySelector = (props: DifficultySelectorProps) => {
  const style = useFormControlStyle();
  const { selectedDifficulty, setSelectedDifficulty } = props;

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
