import { oDataResource } from '../utils';
import ODataRequest from './ODataRequest';

const baseUrl = 'http://localhost:5000/odata';

class BaseODataResource {
    constructor(controller){
        this.baseUrl = `${baseUrl}/${controller}`;
    }

    get = async () => {
        return await oDataResource.get(this.baseUrl);
    }

    getODataRequest = (url) => {
        const baseUrl = url ? url : this.baseUrl;

        const request = new ODataRequest(baseUrl, oDataResource.get);

        return request;
    }

    getWithQuery = async (query) => {
        let url = `${this.baseUrl}`;

        if(query){
            url += `?${query}`;
        }

        return await oDataResource.get(url);
    }

    getWithParameters = async (params) => {
        let url = `${this.baseUrl}`;

        const parametersString = convertParametersToUrlString(params);

        if(parametersString){
            url += `(${parametersString})`;
        }

        return await oDataResource.get(url);
    }

    getWithParameter = async (param) => {
        const url = `${this.baseUrl}(${param})`;

        return await oDataResource.get(url);
    }

    getODataRequestWithParameter = (param) => {
        const url = `${this.baseUrl}(${param})`;

        return this.getODataRequest(url);
    }

    getFunction = (functionName, params) => {
        let url = `${baseUrl}/${functionName}`;

        const parametersString = convertParametersToUrlString(params);

        if(parametersString){
            url += `(${parametersString})`;
        }

        const request = new ODataRequest(url, oDataResource.get);

        return request;
    }

    post = async (obj) => {
        return await oDataResource.post(this.baseUrl, obj);
    }
    
    put = async (obj) => {
        return await oDataResource.put(this.baseUrl, obj);
    }
    
    delete = async (id) => {
        return await oDataResource.delete(this.baseUrl, id);
    }
}

function convertParametersToUrlString(params){
    const parametersUrlString = Object.keys(params)
                                      .map(key => (`${key}=${getParamValue(params[key])}`))
                                      .join(',');

    return parametersUrlString;
}

function getParamValue(param){
    if(Array.isArray(param)){
        return `[${param.join(',')}]`
    }

    return param;
}

export default BaseODataResource;