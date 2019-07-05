import resource from './Semester.resource';
import gql from 'graphql-tag';

export default {
    getSemestersForUniversity: async (universityId) => {
        const query = gql`
        {
            university(id: ${universityId}){
              id
              name
              semesters(universityId: ${universityId}){
                  id
                  name
                  universityId
                  startDate
                  endDate
              }
            }
        }`;

        const semesters = await resource.getSemestersForUniversity(query);

        return semesters;
    },

    addSemester: resource.addSemester
}