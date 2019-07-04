import { restService } from '../../services';

const baseUrl = "http://localhost:5000/graphql"

export default {
    get: restService.get,
    add: restService.post,
    update: restService.put,
    delete: restService.delete
}