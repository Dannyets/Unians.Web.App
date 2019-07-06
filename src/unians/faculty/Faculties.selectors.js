import { getUniansState } from '../Unians.selectors';

export const getFacultiesState = (state) => getUniansState(state).facultiesState;
export const getUniversity = (state) => getFacultiesState(state).university;
export const getFaculties = (state) => getFacultiesState(state).faculties;
export const getSelectedFacultyId = (state) => getFacultiesState(state).selectedFacultyId;
