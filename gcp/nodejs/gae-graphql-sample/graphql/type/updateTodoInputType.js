const graphql = require('graphql');

const todoDataType = new graphql.GraphQLInputObjectType({
  name: 'UpdateTodoData',
  fields: {
    name: { type: graphql.GraphQLString }
  }
})

const updateTodoInputType = new graphql.GraphQLInputObjectType({
  name: 'UpdateTodoInput',
  fields: {
    id: { type: graphql.GraphQLString },
    data: { type: todoDataType }
  }
})


module.exports = updateTodoInputType