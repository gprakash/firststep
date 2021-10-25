const ApolloClient = require('apollo-boost').ApolloClient;
const createHttpLink = require('apollo-link-http').createHttpLink;

const link = createHttpLink({
    uri: '/.netlify/functions/graphql',
    credentials: 'same-origin'
  });
  

function createClient () {
        return new ApolloClient({
        link: createHttpLink({ uri: "/.netlify/functions/graphql" }),
        cache: new InMemoryCache(),
    });
}


module.exports = { createClient }