const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');

const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: graphql.GraphQLString,
      resolve: () => {
        return 'Hello world!'
      }
    }
  }
})

const schema = new graphql.GraphQLSchema({query: queryType});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
