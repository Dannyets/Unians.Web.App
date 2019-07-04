import { restService } from '../../services';

const baseUrl = "http://localhost:5000/graphql"

export default {
    add: restService.post,
    update: restService.put,
    delete: restService.remove
};