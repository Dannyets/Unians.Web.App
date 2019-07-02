import axios from 'axios';
import utils from './general';

let dispatch, requestSentCallbackAction, requestFinishedCallbackAction;

export const initResourceService = (store, requestSentAction, requestFinishedAction) => {
  dispatch = store.dispatch;
  requestSentCallbackAction = requestSentAction;
  requestFinishedCallbackAction = requestFinishedAction;
};

const sentRequest = async (url, params, request, isSilentRequest) => {
  const queryString = params ? utils.objectToQueryString(params) : '';

  if(queryString !== '?'){
    url = `${url}${queryString}`;
  }
  
  if(!isSilentRequest && requestSentCallbackAction){
    dispatch(requestSentCallbackAction());
  }

  let response;

  try {
    response = await request(url);
  } catch (error) {
    console.log(error);
  }

  if(!isSilentRequest && requestFinishedCallbackAction){
    dispatch(requestFinishedCallbackAction());
  }

  return response;
};

export default {

  all: function(requests){
    dispatch(requestSentCallbackAction());

    let response;

    try {
      response = axios.all(requests);
    } catch (error) {
      console.log(error);
    }

    dispatch(requestFinishedCallbackAction());

    return response;
  },

  get: async function(url, params, isSilentRequest){
    return await sentRequest(url, params, async (updatedUrl) => {
      return await axios.get(updatedUrl);
    }, isSilentRequest);
  },

  delete: async function(url, params, isSilentRequest){
    const request = async (updatedUrl) => {
        return await axios.delete(updatedUrl);
    };

    return await sentRequest(url, params, request, isSilentRequest);
  },

  post: async function(url, params, obj, isSilentRequest){
    const request = async (updatedUrl) => {
        return await axios.post(updatedUrl, obj);
      }

    return await sentRequest(url, params, request, isSilentRequest);
  },

  put: async function(url, params, obj, isSilentRequest){
    const request = async (updatedUrl) => {
        return await axios.put(updatedUrl, obj);
    };

    return await sentRequest(url, params, request, isSilentRequest);
  }
};
