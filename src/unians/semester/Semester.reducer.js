import { 
    GET_SEMESTERS_SUCCESS, 
    SELECT_SEMESTER,
    RESET_SEMESTER_SELECTION
} from './Semester.actionTypes';
import initialState from './Semester.initialState';

const semesterReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_SEMESTERS_SUCCESS:{
            const { semesters } = payload;

            return {
                ...state,
                semesters
            };
        }

        case SELECT_SEMESTER:{
            const { semesterId } = payload;
            const { selectedSemesterIds } = state;

            let updatedSelectedSemesterIds = [...selectedSemesterIds];

            const semesterIdIndex = selectedSemesterIds.indexOf(semesterId);

            if(semesterIdIndex < 0){
                updatedSelectedSemesterIds.push(semesterId);
            } else {
                updatedSelectedSemesterIds.splice(semesterIdIndex, 1);
            }

            return {
                ...state,
                selectedSemesterIds: updatedSelectedSemesterIds
            };
        }

        case RESET_SEMESTER_SELECTION: {
            return {
                ...state,
                selectedSemesterIds: []
            };
        }

        default:
            return state;
    }
}

export default semesterReducer;