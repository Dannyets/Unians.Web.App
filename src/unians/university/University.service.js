import resource from './University.resource';
import gql from 'graphql-tag';

export default {
    getUniversities: async () => {
        const query = gql`
        {
            universities {
              id
              name
            }
        }`;

        const universities = await resource.getUniversities(query);

        return universities;
    }
}