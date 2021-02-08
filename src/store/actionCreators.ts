import { Difficulty, DispatchType, QuizFormAction } from "../types/type";
import { SET_CATEGORY_ID, SET_DIFFICULTY, SET_QUESTION_NUMBER } from "./actionTypes";

export function setCategoryID(categoryID: number) {
  const action: QuizFormAction = {
    type: SET_CATEGORY_ID,
    payload: categoryID,
  };

  return (dispatch: DispatchType) => dispatch(action);
}

export function setDifficulty(difficulty: Difficulty) {
  const action: QuizFormAction = {
    type: SET_DIFFICULTY,
    payload: difficulty,
  };

  return (dispatch: DispatchType) => dispatch(action);
}

export function setQuestionNumber(questionNumber: number) {
  const action: QuizFormAction = {
    type: SET_QUESTION_NUMBER,
    payload: questionNumber,
  };

  return (dispatch: DispatchType) => dispatch(action);
}
