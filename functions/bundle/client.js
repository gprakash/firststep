const ApolloClient = require('apollo-boost').ApolloClient;
const createHttpLink = require('apollo-link-http').createHttpLink;
const fetch = require('node-fetch');

const link = createHttpLink({
    uri: '/.netlify/functions/graphql',
    fetch: fetch as any
  });
  

function createClient () {
        return new ApolloClient({cache: new InMemoryCache(),link,});
}


module.exports = { createClient }