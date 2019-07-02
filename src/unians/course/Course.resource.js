import { BaseODataResource } from '../../classes';

const resource = new BaseODataResource('course');

export default {
    getWithParameter: resource.getODataRequestWithParameter,
    add: resource.post,
    update: resource.put,
    delete: resource.remove
};