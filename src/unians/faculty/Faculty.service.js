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

        const data = await resource.getFacultiesForUniversity(query);
        
        const { university: universityData } = data;

        const { faculties, ...university  } = universityData;

        return {
            university,
            faculties
        };
    },

    addFaculty: resource.addFaculty
}