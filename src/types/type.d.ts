import { Difficulty } from "../components/form/DifficultySelectorComponent";

type QuizFormAction = {
  type: string;
  payload: number | Difficulty;
};

type QuizFormState = {
  categoryID: number;
  difficulty: Difficulty;
  questionNUmber: number;
};

type DispatchType = (args: QuizFormAction) => QuizFormAction;

type ScoreProps = {
  score: number;
  nrOfQuestions: number;
  handleButtonClick: () => void;
};

type QuizApiResult = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type QuestionProps = {
  currentQuestion: number;
  nrOfQuestions: number;
  questionText: string;
  answers: string[];
  correctAnswer: string;
  handleAnswerButtonClick: (isCorrect: boolean) => void;
};

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

type ValueLabelProps = {
  children: React.ReactElement;
  open: boolean;
  value: number;
};

type Difficulty = "easy" | "medium" | "hard" | "all";
