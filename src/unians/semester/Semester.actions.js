import { 
    GET_SEMESTERS_SUCCESS, 
    SELECT_SEMESTER,
} from './Semester.actionTypes';
import semeserService from './Semester.service';

const getSemestersSuccess = (semesters) => ({
    type: GET_SEMESTERS_SUCCESS,
    payload: { semesters }
});

export const selectSemester = (semesterId) => ({
    type: SELECT_SEMESTER,
    payload: { semesterId }
});

export const getSemesters = (universityId) => async (dispatch) => {
    const semesters = await semeserService.getSemestersForUniversity(universityId)

    dispatch(getSemestersSuccess(semesters));
}