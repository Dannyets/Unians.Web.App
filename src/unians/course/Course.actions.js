import { 
    GET_FACULTY_COURSES,
    SELECT_COURSE,
    ADD_COURSE_SUCCESS
} from './Course.actionTypes';
import courseService from './Course.service';

const getFacultyCoursesSuccess = (courseState) => ({
    type: GET_FACULTY_COURSES,
    payload: { courseState }
});

export const selectCourse = (courseId) => ({
    type: SELECT_COURSE,
    payload: { courseId }
});

const addCourseSuccess = (course) => ({
    type: ADD_COURSE_SUCCESS,
    payload: { course }
});

export const getFacultyCourses = (universityId, facultyId) => async (dispatch) => {
    const courseState = await courseService.getCoursesForFaculty(universityId, facultyId);
                                          
    dispatch(getFacultyCoursesSuccess(courseState))
}

export const addCourse = (course) => async (dispatch) => {
    const newCourse = await courseService.add(course);

    dispatch(addCourseSuccess(newCourse));
}