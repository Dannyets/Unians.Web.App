export const getUnians = (state) => state.unians;
export const getUniversitiesState = (state) => getUnians(state).universitiesState;
export const getUniversities = (state) => getUniversitiesState(state).universities;
export const getSelectedUniversityId = (state) => getUniversitiesState(state).selectedUniversityId;

export const getFacultiesState = (state) => getUnians(state).facultiesState;
export const getFaculties = (state) => getFacultiesState(state).faculties;
export const getSelectedFacultyId = (state) => getFacultiesState(state).selectedFacultyId;

export const getSemestersState = (state) => getUnians(state).semestersState;
export const getSemesters = (state) => getSemestersState(state).semesters;
export const getSelectedSemesterIds = (state) => getSemestersState(state).selectedSemesterIds;

export const getCoursesState = (state) => getUnians(state).coursesState;
export const getCourses = (state) => getCoursesState(state).courses;
export const getSelectedCourseId = (state) => getCoursesState(state).selectedCourseId;

export const getSemesterCoursesState = (state) => getUnians(state).semesterCoursesState;
export const getSemesterCourses = (state) => getCoursesState(state).semesterCourses;
export const getSelectedSemesterCourseId = (state) => getCoursesState(state).selectedSemesterCourseId;

export const getExercisesState = (state) => getUnians(state).exercisesState;
export const getExercises = (state) => getExercisesState(state).exercises;
export const getSelectedExerciseIds = (state) => getExercisesState(state).selectedExerciseIds;

export const getQuestionsState = (state) => getUnians(state).questionsState;
export const getQuestions = (state) => getQuestionsState(state).questions;