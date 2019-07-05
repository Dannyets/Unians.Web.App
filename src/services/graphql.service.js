import ApolloClient from 'apollo-boost';

class GrahpQLService {
    constructor(url){
        this.baseUrl = url;
        this.client = new ApolloClient({
            uri: url
        });
    }

    get = async (query) => {
        const response = await this.client.query({
            query
        });

        const { data } = response || {};

        return data;
    }
}


export default GrahpQLService;