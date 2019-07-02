import { 
    GET_EXERCISES_SUCCESS,
    RESET_EXERCISES,
    SELECT_EXERCISE
} from './Exercise.actionTypes';
import resource from './Exercise.resource';

const getExercisesSuccess = (exercises) => ({
    type: GET_EXERCISES_SUCCESS,
    payload: { exercises }
});

export const resetExercises = () => ({
    type: RESET_EXERCISES,
    payload: {}
});

export const selectExercise = (exerciseId) => ({
    type: SELECT_EXERCISE,
    payload: { exerciseId }
});

export const getExercisesForCourseAndSemesters = (courseId, semesterIds) => async (dispatch) => {
    const exercises = await resource.getExercisesForCourseAndSemesters(courseId, semesterIds);

    dispatch(getExercisesSuccess(exercises));
}