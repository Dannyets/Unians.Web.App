import { University, Faculty, Course, FindExercises } from '../unians';

export default [
    {
        url: '/',
        component: University,
        exact: true
    },
    {
        url: '/:universityId',
        component: Faculty,
        exact: true
    },
    {
        url: '/:universityId/:facultyId',
        component: Course,
        exact: true
    },
    {
        url: '/:universityId/:facultyId/:courseId',
        component: FindExercises,
        exact: true
    }
];