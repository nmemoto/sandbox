const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');
const queryType = require('./type/queryType')
const mutationType = require('./type/mutationType')

const schema = new graphql.GraphQLSchema({
  query: queryType,
  mutation: mutationType
});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
