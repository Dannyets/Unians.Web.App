import { 
    GET_QUESTIONS_FOR_EXERCISES_SUCCESS
} from './Question.actionTypes';
import resource from './Question.resource';

const getQuestionsForExercisesSuccess = (questions) => ({
    type: GET_QUESTIONS_FOR_EXERCISES_SUCCESS,
    payload: { questions }
})

export const getQuestionsForExercises = (exerciseIds) => async (dispatch) => {
    const questions = await resource.getQuestionsForExercises(exerciseIds);

    dispatch(getQuestionsForExercisesSuccess(questions));
}