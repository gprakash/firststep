const ApolloClient = require('apollo-boost').ApolloClient;
const createHttpLink = require('apollo-link-http').createHttpLink;
const fetch = require('cross-fetch/polyfill').fetch;
const cache = require('apollo-cache-inmemory').InMemoryCache;
const link = createHttpLink({uri: '/.netlify/functions/graphql', fetch });

const cache = new InMemoryCache({
    typePolicies: {
        hello: {
            keyFields: ["hello"],
        },    
    }
});


function createClient () {
        return new ApolloClient({cache,link,});
}


module.exports = { createClient }