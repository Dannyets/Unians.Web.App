import { BaseODataResource } from '../../classes';

const resource = new BaseODataResource('faculty');

export default {
    get: resource.get,
    getODataRequest: resource.getODataRequest,
    getWithParameter: resource.getWithParameter,
    add: resource.post,
    update: resource.put,
    delete: resource.remove,
}