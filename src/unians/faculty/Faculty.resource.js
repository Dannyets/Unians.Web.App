import { GrahpQLService, restService } from '../../services';
import configuration from '../../configuration';

const { BASE_URL } = configuration;
const BASE_GRAPHQL_ENDPOINT_URL = `${BASE_URL}/graphql`
const BASE_FACULTY_ENDPOINT_URL = `${BASE_URL}/api/Faculty`

const graphqlService = new GrahpQLService(BASE_GRAPHQL_ENDPOINT_URL);

export default {
    getFacultiesForUniversity: async (query) => {
        const data = await graphqlService.get(query);

        const { university } = data;

        return university;
    },

    addFaculty: async (faculty) => {
        return await restService.post(BASE_FACULTY_ENDPOINT_URL, undefined, faculty);
    }
}