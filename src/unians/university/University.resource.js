import { BaseODataResource } from '../../classes';

const resource = new BaseODataResource('university');

export default {
    getODataRequest: resource.getODataRequest,
    get: resource.get,
    add: resource.post,
    update: resource.put,
    delete: resource.remove
}