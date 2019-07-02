import { 
    GET_FACULTY_COURSES,
    SELECT_COURSE,
    ADD_COURSE_SUCCESS
} from './Course.actionTypes';
import resource from './Course.resource';

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

export const getFacultyCourses = (facultyId) => async (dispatch) => {
    const courses = await resource.getWithParameter(facultyId)
                                  .select('Name', 'Id', 'CourseNumber')
                                  .executeRequest();
                                          
    dispatch(getFacultyCoursesSuccess(courses))
}

export const addCourse = (course) => async (dispatch) => {
    const newCourse = await resource.add(course);

    dispatch(addCourseSuccess(newCourse));
}