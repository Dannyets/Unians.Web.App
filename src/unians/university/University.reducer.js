import { 
    GET_UNIVERSITIES_SUCCESS,
    SELECT_UNIVERSITY,
    ADD_UNIVERSITY
} from './University.actionTypes';
import initialState from './University.initialState';

const universityReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_UNIVERSITIES_SUCCESS:{
            const { universities } = payload;

            return {
                ...state,
                universities
            };
        }

        case SELECT_UNIVERSITY: {
            const { universityId } = payload;

            return {
                ...state,
                selectedUniversityId: universityId
            };
        }

        case ADD_UNIVERSITY: {
            const { university } = payload;
            const { universities } = state;
            
            return {
                ...state,
                universities: [...universities, university]
            };
        }
            
        default:
            return state;
    }
}

export default universityReducer;