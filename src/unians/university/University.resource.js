import { graphqlService } from '../../services';

export default {
    getUniversities: async (query) => {
        const data = await graphqlService.get(query);

        const { universities } = data;

        return universities;
    },
}