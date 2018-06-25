const graphql = require('graphql');

const todoDataType = new graphql.GraphQLObjectType({
  name: 'TodoData',
  fields: {
    name: { type: graphql.GraphQLString }
  }
})

const todoType = new graphql.GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: { type: graphql.GraphQLString },
    data: { type: todoDataType }
  }
})

module.exports = todoType