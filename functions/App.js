// src/App.js
const { createClient } = require('./bundle/client')

const client = createClient();

exports.handler = client.createHandler({
    cors: {
      origin: '*'
    }
  });