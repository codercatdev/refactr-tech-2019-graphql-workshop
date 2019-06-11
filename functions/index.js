const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

app.use(cors());

app.use(
  '/',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

mongoose.connect(
  'mongodb://refactr:h*7rbQ4v27pi@ds233167.mlab.com:33167/gql-refactr',
  { useNewUrlParser: true }
);
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

exports.api = functions.https.onRequest(app);
