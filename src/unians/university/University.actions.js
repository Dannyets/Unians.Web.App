import { 
    GET_UNIVERSITIES_SUCCESS,
    SELECT_UNIVERSITY,
    ADD_UNIVERSITY
} from './University.actionTypes';
import univesityResource from './University.resource';

const getUniversitiesSuccess = (universities) => ({
    type: GET_UNIVERSITIES_SUCCESS,
    payload: { universities }
});

export const selectUniversity = (universityId) => ({
    type: SELECT_UNIVERSITY,
    payload: { universityId }
});

export const addUniversitySuccess = (university) => ({
    type: ADD_UNIVERSITY,
    payload: { university }
});

export const getUniversities = () => async (dispatch) => {
    const universities = await univesityResource.getODataRequest()
                                                .select('Name', 'Id')
                                                .executeRequest();

    dispatch(getUniversitiesSuccess(universities))
}

export const addUniversity = (university) => async (dispatch) => {
    const newUniversity = await univesityResource.add(university);

    dispatch(addUniversitySuccess(newUniversity))
}