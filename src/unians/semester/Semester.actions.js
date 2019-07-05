import { 
    GET_SEMESTERS_SUCCESS, 
    SELECT_SEMESTER,
    RESET_SEMESTER_SELECTION
} from './Semester.actionTypes';
import semeserService from './Semester.service';

export const getSemestersSuccess = (semesters) => ({
    type: GET_SEMESTERS_SUCCESS,
    payload: { semesters }
});

export const selectSemester = (semesterId) => ({
    type: SELECT_SEMESTER,
    payload: { semesterId }
});

export const resetSemesterSelection = () => ({
    type: RESET_SEMESTER_SELECTION,
    payload: {}
});

export const getSemesters = (universityId) => async (dispatch) => {
    const semesters = await semeserService.getSemestersForUniversity(universityId)

    dispatch(getSemestersSuccess(semesters));
}