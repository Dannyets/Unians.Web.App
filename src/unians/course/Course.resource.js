import { GrahpQLService, restService } from '../../services';
import configuration from '../../configuration';

const { BASE_URL } = configuration;
const BASE_GRAPHQL_ENDPOINT_URL = `${BASE_URL}/graphql`
const BASE_UNIVESITY_ENDPOINT_URL = `${BASE_URL}/api/Course`

const graphqlService = new GrahpQLService(BASE_GRAPHQL_ENDPOINT_URL);

export default {
    getCoursesForFaculty: async (query) => {
        const data = await graphqlService.get(query);

        const { university } = data;

        const { faculty } = university || {};

        const { courses } = faculty || [];

        return courses;
    },

    addCourse: async (university) => {
        return await restService.post(BASE_UNIVESITY_ENDPOINT_URL, undefined, university);
    }
}