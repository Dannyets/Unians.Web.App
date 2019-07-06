import { combineReducers } from 'redux';
import { universityReducer } from './university';
import { facultyReducer } from './faculty';
import { semesterReducer } from './semester';
import { courseReducer } from './course';
import { exerciseReducer } from './exercise';

const uniansReducer = combineReducers({
    universitiesState: universityReducer,
    facultiesState: facultyReducer,
    semestersState: semesterReducer,
    coursesState: courseReducer,
    exercisesState: exerciseReducer
});

export default uniansReducer;