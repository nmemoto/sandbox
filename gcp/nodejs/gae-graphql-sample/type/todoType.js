const graphql = require('graphql');

const todoType = new graphql.GraphQLObjectType({
    name: 'Todo',
    fields: {
      id: { type: graphql.GraphQLString },
      name: { type: graphql.GraphQLString }
    }
  })

  module.exports = todoType