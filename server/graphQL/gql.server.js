const express = require('express');
const app = express();
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const fs = require('fs');
const axios = require('axios');
const { GraphQLError } = require('graphql');
const bookingCodeRegexpPatter = new RegExp('^[a-zA-Z2-9]*$');
const schema = buildSchema(fs.readFileSync('schema.graphql', 'utf8'));

let bookingData = [];
axios
  .get('http://localhost:3000/mock.json')
  .then(response => {
    bookingData = [response.data];
  })
  .catch(err => {
    console.error(err);
  });

function throwError(errorMessage, errorStatus = 'BAD_USER_INPUT') {
  throw new GraphQLError(errorMessage, {
    extensions: {
      code: errorStatus,
    },
  });
}

function serverSideValidation(args) {
  if (!args.bookingCode.length) {
    throwError('Booking code is a required filed');
  }
  if (args.bookingCode.length < 5) {
    throwError('Booking code must have 5 characters');
  }
  if (args.bookingCode.length > 6) {
    throwError('Booking code can have maximum 6 characters');
  }
  if (!bookingCodeRegexpPatter.test(args.bookingCode)) {
    throwError('Booking code contains invalid characters. Allowed characters: a-z, A-Z, 2-9');
  }
  if (!args.familyName.length) {
    throwError('Family name is a required filed');
  }
  if (args.familyName.length < 2) {
    throwError('Family name must have 2 characters');
  }
  if (args.familyName.length > 30) {
    throwError('Family name can have maximum 30 characters');
  }
}

const root = {
  bookingDetails: args => {
    serverSideValidation(args);
    return bookingData.find(item => item.bookingCode === args.bookingCode && item.passengers.firstName.includes(args.familyName));
  },
};

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');
