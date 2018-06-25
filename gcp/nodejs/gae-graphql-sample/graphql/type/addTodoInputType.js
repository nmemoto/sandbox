const graphql = require('graphql');

const addTodoInputType = new graphql.GraphQLInputObjectType({
  name: 'AddTodoInput',
  fields: {
    name: { type: graphql.GraphQLString }
  }
})

module.exports = addTodoInputType