import { Difficulty, QuizFormAction, QuizFormState } from "../types/type";
import { SET_CATEGORY_ID, SET_DIFFICULTY, SET_QUESTION_NUMBER } from "./actionTypes";

const initialState: QuizFormState = {
  categoryID: 0,
  difficulty: "all",
  questionNUmber: 5,
};

const reducer = (state: QuizFormState = initialState, action: QuizFormAction): QuizFormState => {
  switch (action.type) {
    case SET_CATEGORY_ID:
      return {
        ...state,
        categoryID: action.payload as number,
      };
    case SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload as Difficulty,
      };
    case SET_QUESTION_NUMBER:
      return {
        ...state,
        questionNUmber: action.payload as number,
      };
    default:
      return state;
  }
};

export default reducer;
