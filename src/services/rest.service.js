import axios from 'axios';
import { generalUtils } from '../utils';

async function sendRequest (url, params, request, body){
  const queryString = params ? generalUtils.objectToQueryString(params) : '';
  
  if(queryString){
    url = `${url}${queryString}`;
  }
  
  const response = await request(url, body);

  const { data } = response || {};

  return data;
};

export default {
  get: async (url, params) => {
    return await sendRequest(url, params, axios.get);
  },

  delete: async function(url, params){
    return await sendRequest(url, params, axios.delete);
  },

  post: async function(url, params, body){
    return await sendRequest(url, params, axios.post, body);
  },

  put: async function(url, params, body){
    return await sendRequest(url, params, axios.put, body);
  }
};
