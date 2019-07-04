import ApolloClient from 'apollo-boost';

const BASE_GRAPHQL_ENDPOINT_URL = "http://localhost:5000/graphql"

const client = new ApolloClient({
    uri: BASE_GRAPHQL_ENDPOINT_URL
});
  
export default {
    get: async (query) => {
        const response = await client.query({
            query
        });

        const { data } = response || {};

        return data;
    }
}