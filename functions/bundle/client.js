const ApolloClient = require('apollo-boost').ApolloClient;

function createClient () {
        return new ApolloClient({
        uri: "/.netlify/functions/graphql"
    });
}


module.exports = { createClient }