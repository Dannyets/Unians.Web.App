import resource from './Exercise.resource';
import gql from 'graphql-tag';

export default {
    getExercisesForCourseAndSemesters: async (universityId, facultyId, courseId, semesterIds) => {
        const query = gql`
        {
            university(id: ${universityId}) {
              id
              name
              faculty(id: ${facultyId}){
                  id
                  name
                  course(id: ${courseId}) {
                      id
                      name
                      exercises(courseId: ${courseId}, semesterIds: [${semesterIds.join(',')}]){
                        id
                        courseId
                        semesterId
                        name
                      }
                  }
              }
              semesters(universityId: ${universityId}){
                  id
                  name
              }
            }
        }`;

        const state = await resource.getExercisesForCourseAndSemesters(query);

        return state;
    },

    addExercise: resource.addExercise
}