import { 
    GET_FACULTIES_FOR_UNIVERSITY_SUCCESS, 
    SELECT_FACULTY,
    ADD_FACULTY_SUCCESS
} from './Faculty.actionTypes';
import facultyService from './Faculty.service';

const getFacultiesForUniversitySuccess = (facultiesState) => ({
    type: GET_FACULTIES_FOR_UNIVERSITY_SUCCESS,
    payload: { facultiesState }
});

export const selectFaculty = (facultyId) => ({
    type: SELECT_FACULTY,
    payload: { facultyId }
});

export const addFacultySuccess = (faculty) => ({
    type: ADD_FACULTY_SUCCESS,
    payload: { faculty }
});


export const getFacultiesForUniversity = (universityId) => async (dispatch) => {
    const facultiesState = await facultyService.getFacultiesForUniversity(universityId);

    dispatch(getFacultiesForUniversitySuccess(facultiesState));
}

export const addFaculty = (faculty) => async (dispatch) => {
    const newFaculty = await facultyService.addFaculty(faculty);

    dispatch(addFacultySuccess(newFaculty));
}
