import { 
    GET_EXERCISES_SUCCESS,
    SELECT_EXERCISE
} from './Exercise.actionTypes';

import initialState from './Exercise.initialState';

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