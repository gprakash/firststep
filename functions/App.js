// src/App.js
const Boost = require('apollo-boost');
const ApolloClient = Boost.DefaultClient;

const client =   ApolloClient({
  uri: "/.netlify/functions/graphql"
});