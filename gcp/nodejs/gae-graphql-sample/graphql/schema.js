const graphql = require('graphql');
const queryType = require('./type/queryType')
const mutationType = require('./type/mutationType')

const schema = new graphql.GraphQLSchema({
    query: queryType,
    mutation: mutationType
  });
  
module.exports = schema