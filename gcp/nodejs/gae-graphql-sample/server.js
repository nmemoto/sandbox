const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema.js');

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
