import resource from './Faculty.resource';
import gql from 'graphql-tag';

export default {
    getFacultiesForUniversity: async (universityId) => {
        const query = gql`
        {
            university(id: ${universityId}) {
              id
              name
              faculties(universityId: ${universityId}) {
                  id
                  name
              }
            }
        }`;

        const universityWithFaculties = await resource.getFacultiesForUniversity(query);
        
        const { faculties } = universityWithFaculties;

        return faculties;
    },

    addFaculty: resource.addFaculty
}