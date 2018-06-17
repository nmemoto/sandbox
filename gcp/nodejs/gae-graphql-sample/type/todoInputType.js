const graphql = require('graphql');

const todoInputType = new graphql.GraphQLInputObjectType({
  name: 'TodoInput',
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString }
  }
})

module.exports = todoInputType