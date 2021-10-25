// src/App.js
import ApolloClient from "apollo-boost";
const client = new ApolloClient({
  uri: "/.netlify/functions/graphql"
});