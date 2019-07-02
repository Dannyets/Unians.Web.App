import { 
    GET_SEMESTERS_SUCCESS, 
    SELECT_SEMESTER,
    RESET_SEMESTER_SELECTION
} from './Semester.actionTypes';
import semeserResource from './Semester.resource';

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

export const getSemesters = () => async (dispatch) => {
    const semesters = await semeserResource.getODataRequest()
                                           .select('Name', 'Id')
                                           .executeRequest();

    dispatch(getSemestersSuccess(semesters));
}