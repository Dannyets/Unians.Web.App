import { GrahpQLService, restService } from '../../services';
import configuration from '../../configuration';

const { BASE_URL } = configuration;
const BASE_GRAPHQL_ENDPOINT_URL = `${BASE_URL}/graphql`
const BASE_UNIVESITY_ENDPOINT_URL = `${BASE_URL}/api/University`

const graphqlService = new GrahpQLService(BASE_GRAPHQL_ENDPOINT_URL);

export default {
    getUniversities: async (query) => {
        const data = await graphqlService.get(query);

        const { universities } = data;

        return universities;
    },

    addUniversity: async (university) => {
        return await restService.post(BASE_UNIVESITY_ENDPOINT_URL, undefined, university);
    }
}