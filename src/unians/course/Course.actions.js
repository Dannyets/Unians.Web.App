import { 
    GET_FACULTY_COURSES,
    SELECT_COURSE,
    ADD_COURSE_SUCCESS
} from './Course.actionTypes';
import courseService from './Course.service';

const getFacultyCoursesSuccess = (courses) => ({
    type: GET_FACULTY_COURSES,
    payload: { courses }
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
    const courses = await courseService.getCoursesForFaculty(universityId, facultyId);
                                          
    dispatch(getFacultyCoursesSuccess(courses))
}

export const addCourse = (course) => async (dispatch) => {
    const newCourse = await courseService.add(course);

    dispatch(addCourseSuccess(newCourse));
}