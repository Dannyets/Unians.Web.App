import axios from 'axios'; 

const headers = { "Content-Type": "application/json", Accept: "application/json" };

const get = async (requestUri) => {
    const request = {
        requestUri,
        method: axios.get,
        headers
    };

    const response = await sendRequest(request)

    const { value } = response || {};

    return value;
}

const post = async (requestUri, data) => {
    const request = {
        requestUri,
        method: axios.post,
        headers,
        data
    };

    return await sendRequest(request);
}

const put = async (requestUri, data) => {
    const request = {
        requestUri,
        method: axios.put,
        headers,
        data
    };

    return await sendRequest(request);
}

const remove = async (requestUri, key) => {
    const request = {
        requestUri: `${requestUri}(${key})`,
        method: axios.delete,
        headers,
    };

    return await sendRequest(request);
}

async function sendRequest(request){
    const { requestUri, method, data } = request;

    let response;

    try {
        response = await method(requestUri, data);
    } catch(error) {
        console.log(error);
        return;
    }

    const { data: responseData } = response || {};

    return responseData;
}

export default {
    get,
    post,
    put,
    remove
}