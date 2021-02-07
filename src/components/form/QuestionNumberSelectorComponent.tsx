import { FormControl, InputLabel, Slider, Tooltip, Typography } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { QUIZ_QUESTION_COUNT_BY_CATEGORY_API, QUIZ_TOTAL_QUESTION_COUNT_API } from "../../quizApi";
import { Difficulty } from "./DifficultySelectorComponent";

type CategoryQuestionCount = {
  total_question_count: number;
  total_easy_question_count: number;
  total_medium_question_count: number;
  total_hard_question_count: number;
};

type QuestionCountByCategoryResponse = {
  category_id: number;
  category_question_count: CategoryQuestionCount;
};

type QuestionNumberSelectorProps = {
  selectedCategoryID: number;
  selectedDifficulty: Difficulty;
  questionNumber: number;
  setQuestionNumber: (questionNumber: number) => void;
};

interface ValueLabelProps {
  children: React.ReactElement;
  open: boolean;
  value: number;
}

const ValueLabelComponent = (props: ValueLabelProps) => {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
};

const QuestionNumberSelector = (props: QuestionNumberSelectorProps) => {
  const { selectedCategoryID, selectedDifficulty, questionNumber, setQuestionNumber } = props;
  const [maxQuestionCount, setMaxQuestionCount] = useState<number>(50);

  useEffect(() => getQuestionCount(), [selectedCategoryID, selectedDifficulty]);

  const getQuestionCount = useCallback(() => {
    if (selectedCategoryID === 0) {
      fetch(QUIZ_TOTAL_QUESTION_COUNT_API)
        .then((res) => res.json())
        .then((res) => {
          const count = res.overall.total_num_of_verified_questions;
          setMaxQuestionCount(Math.min(count, 50));
        });
    } else {
      let count;
      fetch(QUIZ_QUESTION_COUNT_BY_CATEGORY_API(selectedCategoryID))
        .then((res) => res.json())
        .then((res: QuestionCountByCategoryResponse) => {
          switch (selectedDifficulty) {
            case "easy":
              count = res.category_question_count.total_easy_question_count;
              break;
            case "medium":
              count = res.category_question_count.total_medium_question_count;
              break;
            case "hard":
              count = res.category_question_count.total_hard_question_count;
              break;
            default:
              count = res.category_question_count.total_question_count;
              break;
          }
          setMaxQuestionCount(Math.min(count, 50));
        });
    }
  }, [selectedCategoryID, selectedDifficulty]);

  const handleChangeCommit = (event: React.ChangeEvent<{}>, value: number | number[]) => {
    setQuestionNumber(value as number);
  };

  return (
    <FormControl>
      <InputLabel id="question-number-selector-label">Number of questions</InputLabel>
      <Slider
        id="question-number-selector"
        aria-labelledby="question-number-selector-label"
        ValueLabelComponent={ValueLabelComponent}
        defaultValue={5}
        min={1}
        max={maxQuestionCount}
        onChangeCommitted={handleChangeCommit}
      />
    </FormControl>
  );
};

export default QuestionNumberSelector;
