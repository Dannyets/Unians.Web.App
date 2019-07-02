import ODataQueryBuilder from './ODataQueryBuilder';

export default class ODataRequest extends ODataQueryBuilder {
    constructor(baseUrl, asyncRequest){
        super();

        this.baseUrl = baseUrl;
        this.asyncRequest = asyncRequest;
    }

    executeRequest = async () => {
        const value = this.getValue();

        let fullUrl = this.baseUrl;

        if(value){
            fullUrl += `?${value}`;
        }

        return await this.asyncRequest(fullUrl);
    }
}