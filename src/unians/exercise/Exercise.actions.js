import { 
    GET_EXERCISES_SUCCESS,
    SELECT_EXERCISE
} from './Exercise.actionTypes';
import exerciseService from './Exercise.service';

const getExercisesSuccess = (exerciseState) => ({
    type: GET_EXERCISES_SUCCESS,
    payload: { exerciseState }
});

export const selectExercise = (exerciseId) => ({
    type: SELECT_EXERCISE,
    payload: { exerciseId }
});

export const getExercisesForCourseAndSemesters = (universityId, facultyId, courseId, semesterIds) => async (dispatch) => {
    const state = await exerciseService.getExercisesForCourseAndSemesters(universityId, facultyId, courseId, semesterIds);

    dispatch(getExercisesSuccess(state));
}