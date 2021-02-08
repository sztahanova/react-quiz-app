import { FormControl, InputLabel, Slider, Tooltip } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QUIZ_QUESTION_COUNT_BY_CATEGORY_API, QUIZ_TOTAL_QUESTION_COUNT_API } from "../../quizApi";
import { setQuestionNumber } from "../../store/actionCreators";
import { QuestionCountByCategoryResponse, QuizFormState, ValueLabelProps } from "../../types/type";

const ValueLabelComponent = (props: ValueLabelProps) => {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
};

const QuestionNumberSelector = () => {
  const dispatch = useDispatch();

  const selectedCategoryID = useSelector((state: QuizFormState) => state.categoryID);
  const selectedDifficulty = useSelector((state: QuizFormState) => state.difficulty);

  const setNumberOfQuestions = useCallback((questionNumber: number) => dispatch(setQuestionNumber(questionNumber)), [
    dispatch,
  ]);

  const [loading, setLoading] = useState<boolean>(false);
  const [maxQuestionCount, setMaxQuestionCount] = useState<number>(50);

  const getQuestionCount = useCallback(() => {
    setLoading(true);

    if (selectedCategoryID === 0) {
      fetch(QUIZ_TOTAL_QUESTION_COUNT_API)
        .then((res) => res.json())
        .then((res) => {
          const count = res.overall.total_num_of_verified_questions;
          setMaxQuestionCount(Math.min(count, 50));
          setLoading(false);
        });
    } else {
      let count;
      fetch(`${QUIZ_QUESTION_COUNT_BY_CATEGORY_API}${selectedCategoryID}`)
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
          setLoading(false);
        });
    }
  }, [selectedCategoryID, selectedDifficulty]);
  useEffect(() => getQuestionCount(), [selectedCategoryID, selectedDifficulty, getQuestionCount]);


  const handleChangeCommit = (event: React.ChangeEvent<{}>, value: number | number[]) => {
    setNumberOfQuestions(value as number);
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
        disabled={loading}
      />
    </FormControl>
  );
};

export default QuestionNumberSelector;
