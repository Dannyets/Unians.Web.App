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

        const courses = await resource.getCoursesForFaculty(query);

        return courses;
    },

    addUniversity: resource.addCourse
}