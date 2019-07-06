import { getUniansState } from '../Unians.selectors';

export const getSemestersState = (state) => getUniansState(state).semestersState;
export const getSemesters = (state) => getSemestersState(state).semesters;
export const getSelectedSemesterIds = (state) => getSemestersState(state).selectedSemesterIds;
