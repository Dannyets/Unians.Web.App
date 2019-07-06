import { 
    GET_EXERCISES_SUCCESS,
    RESET_EXERCISES,
    SELECT_EXERCISE
} from './Exercise.actionTypes';

import initialState from './Exercise.initialState';

import { semesterActionTypes } from '../semester'
const { RESET_SEMESTER_SELECTION } = semesterActionTypes;

const exerciseReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_EXERCISES_SUCCESS: {
            const { exerciseState } = payload;
            const { university, faculty, course, semesters, exercises } = exerciseState;

            return {
                ...state,
                university, 
                faculty, 
                course, 
                semesters,
                exercises
            };
        }

        case RESET_EXERCISES:
        case RESET_SEMESTER_SELECTION: {
            return {
                ...state,
                exercises: []
            };
        }

        case SELECT_EXERCISE: {
            const { exerciseId } = payload;
            const { selectedExerciseIds } = state;

            const existingExerciseIdIndex = selectedExerciseIds.indexOf(exerciseId);

            let updatedSelectedExerciseIds = [...selectedExerciseIds];

            if(existingExerciseIdIndex < 0){
                updatedSelectedExerciseIds.push(exerciseId);
            } else {
                updatedSelectedExerciseIds.splice(existingExerciseIdIndex, 1);
            }

            return {
                ...state,
                selectedExerciseIds: updatedSelectedExerciseIds
            }
        }
    
        default:
            return state;
    }
}

export default exerciseReducer;