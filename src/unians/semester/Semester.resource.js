import { BaseODataResource } from '../../classes';

const resource = new BaseODataResource('semester');

export default {
    getODataRequest: resource.getODataRequest,
    getWithParameter: resource.getWithParameter,
    get: resource.get,
    add: resource.post,
    update: resource.put,
    delete: resource.remove
}