import { getUniansState } from '../Unians.selectors';

export const getUniversitiesState = (state) => getUniansState(state).universitiesState;
export const getUniversities = (state) => getUniversitiesState(state).universities;
export const getSelectedUniversityId = (state) => getUniversitiesState(state).selectedUniversityId;
