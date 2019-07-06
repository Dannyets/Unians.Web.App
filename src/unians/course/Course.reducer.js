import {
    GET_FACULTY_COURSES, 
    SELECT_COURSE,
    ADD_COURSE_SUCCESS
} from './Course.actionTypes'

import initialState from './Course.initialState';

const courseReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch  (type){
        case GET_FACULTY_COURSES: {
            const { courseState } = payload;
            const { university, faculty, courses } = courseState;
            
            return {
                ...state,
                university, 
                faculty,
                courses
            };
        }

        case SELECT_COURSE: {
            const { courseId } = payload;

            return {
                ...state,
                selectedCourseId: courseId
            };
        }

        case ADD_COURSE_SUCCESS: {
            const { course } = payload;
            const { courses } = state;

            return {
                ...state,
                courses: [...courses, course]
            };
        }

        default: 
            return state;
    }
}

export default courseReducer;