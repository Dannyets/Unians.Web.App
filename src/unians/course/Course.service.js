import resource from './Course.resource';
import gql from 'graphql-tag';

export default {
    getCoursesForFaculty: async (universityId, facultyId) => {
        const query = gql`
        {
            university(id: ${universityId}) {
              id
              name
              faculty(id: ${facultyId}){
                  id
                  name
                  courses(facultyId: ${facultyId}) {
                      id
                      name
                  }
              }
            }
        }`;

        const data = await resource.getCoursesForFaculty(query);

        const { university: universityData } = data;

        const { faculty: facultyData, ...university } = universityData;

        const { courses, ...faculty } = facultyData;

        return {
            university,
            faculty,
            courses
        };
    },

    addUniversity: resource.addCourse
}