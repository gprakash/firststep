const ApolloClient = require('apollo-boost').ApolloClient;
const createHttpLink = require('apollo-link-http').createHttpLink;
const fetch = require('cross-fetch/polyfill').fetch;

const link = createHttpLink({uri: '/.netlify/functions/graphql', fetch });
  

function createClient () {
        return new ApolloClient({cache: new InMemoryCache(),link,});
}


module.exports = { createClient }