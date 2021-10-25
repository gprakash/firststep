const ApolloClient = require('apollo-boost').ApolloClient;

function createClient () {
        return new ApolloClient({
        link: createHttpLink({ uri: "/.netlify/functions/graphql" }),
        cache: new InMemoryCache(),
    });
}


module.exports = { createClient }