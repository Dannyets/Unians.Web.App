import { getUnians } from '../Unians.selectors';

export const getExercisesState = (state) => getUnians(state).exercisesState;
export const getUniversity = (state) => getExercisesState(state).university;
export const getFaculty = (state) => getExercisesState(state).faculty;
export const getCourse = (state) => getExercisesState(state).course;
export const getSemesters = (state) => getExercisesState(state).semesters;
export const getExercises = (state) => getExercisesState(state).exercises;
export const getSelectedExerciseIds = (state) => getExercisesState(state).selectedExerciseIds;