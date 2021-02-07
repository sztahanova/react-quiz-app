export const QUIZ_CATEGORY_API = 'https://opentdb.com/api_category.php';
export const QUIZ_TOTAL_QUESTION_COUNT_API = 'https://opentdb.com/api_count_global.php';
export const QUIZ_QUESTION_COUNT_BY_CATEGORY_API = (categoryID: number) => `https://opentdb.com/api_count.php?category=${categoryID}`;