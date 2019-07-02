import { 
    GET_FACULTIES_FOR_UNIVERSITY_SUCCESS, 
    GET_ALL_FACULTIES_SUCCESS,
    SELECT_FACULTY,
    ADD_FACULTY_SUCCESS
} from './Faculty.actionTypes';
import facultyResource from '../faculty/Faculty.resource';

const getFacultiesForUniversitySuccess = (faculties) => ({
    type: GET_FACULTIES_FOR_UNIVERSITY_SUCCESS,
    payload: { faculties }
});

const getFacultiesSuccess = (faculties) => ({
    type: GET_ALL_FACULTIES_SUCCESS,
    payload: { faculties }
});

export const getFacultiesForUniversity = (universityId) => async (dispatch) => {
    const faculties = await facultyResource.getWithParameter(universityId);

    dispatch(getFacultiesForUniversitySuccess(faculties));
}

export const selectFaculty = (facultyId) => ({
    type: SELECT_FACULTY,
    payload: { facultyId }
});

export const addFacultySuccess = (faculty) => ({
    type: ADD_FACULTY_SUCCESS,
    payload: { faculty }
});

export const getFaculties = () => async (dispatch) => {
    const faculties = await facultyResource.getODataRequest()
                                           .select('Name', 'Id')
                                           .executeRequest();

    dispatch(getFacultiesSuccess(faculties));
}

export const addFaculty = (faculty) => async (dispatch) => {
    const newFaculty = await facultyResource.add(faculty);

    dispatch(addFacultySuccess(newFaculty));
}