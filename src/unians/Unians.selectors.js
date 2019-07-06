export const getUniansState = (state) => state.unians;

export const getQuestionsState = (state) => getUniansState(state).questionsState;
export const getQuestions = (state) => getQuestionsState(state).questions;