import { GrahpQLService, restService } from '../../services';
import configuration from '../../configuration';

const { BASE_URL } = configuration;
const BASE_GRAPHQL_ENDPOINT_URL = `${BASE_URL}/graphql`
const BASE_UNIVESITY_ENDPOINT_URL = `${BASE_URL}/api/Semester`

const graphqlService = new GrahpQLService(BASE_GRAPHQL_ENDPOINT_URL);

export default {
    getSemestersForUniversity: async (query) => {
        const data = await graphqlService.get(query);

        const { university } = data;

        const { semesters } = university || {};

        return semesters;
    },

    addSemester: async (semester) => {
        return await restService.post(BASE_UNIVESITY_ENDPOINT_URL, undefined, semester);
    }
}