import { 
    GET_QUESTIONS_FOR_EXERCISES_SUCCESS
} from './Question.actionTypes';

import initialState from './Question.initialState';

const questionReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_QUESTIONS_FOR_EXERCISES_SUCCESS: {
            const { questions } = payload;

            return {
                ...state,
                questions
            };
        }
    
        default:
            return state;
    }
}

export default questionReducer;