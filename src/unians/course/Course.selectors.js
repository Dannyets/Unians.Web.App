import { getUniansState } from '../Unians.selectors';

export const getCoursesState = (state) => getUniansState(state).coursesState;
export const getUniversity = (state) => getCoursesState(state).university;
export const getFaculty = (state) => getCoursesState(state).faculty;
export const getCourses = (state) => getCoursesState(state).courses;
export const getSelectedCourseId = (state) => getCoursesState(state).selectedCourseId;
