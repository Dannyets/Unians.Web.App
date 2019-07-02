import { 
    GET_FACULTIES_FOR_UNIVERSITY_SUCCESS,
    GET_ALL_FACULTIES_SUCCESS,
    SELECT_FACULTY,
    ADD_FACULTY_SUCCESS
} from './Faculty.actionTypes';

import initialState from './faculty.initialState';

const facultyReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_FACULTIES_SUCCESS:
        case GET_FACULTIES_FOR_UNIVERSITY_SUCCESS:{
            const { faculties } = payload;

            return { 
                ...state,
                faculties
            };
        }

        case SELECT_FACULTY: {
            const { facultyId } = payload;

            return {
                ...state,
                selectedFacultyId: facultyId
            };
        }

        case ADD_FACULTY_SUCCESS: {
            const { faculty } = payload;
            const { faculties } = state;

            return {
                ...state,
                faculties: [...faculties, faculty]
            };
        }
            
        default:
            return state;
    }
}

export default facultyReducer;