const graphql = require('graphql');
const todoType = require('./todoType');
const todoInputType = require('./todoInputType');
const TodoService = require('../../services/TodoService');

const mutationType = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: {
      type: todoType,
      args: {
        todo: { type: todoInputType }
      },
      resolve: (_, { todo }) => {
        return TodoService.create(todo)
      }
    },
    updateTodo: {
      type: todoType,
      args: {
        todo: { type: todoInputType }
      },
      resolve: (_, { todo }) => {
        return TodoService.update(todo)
      }
    },
    deleteTodo: {
      type: graphql.GraphQLString,
      args: {
        id: { type: graphql.GraphQLString }
      },
      resolve: (_, { id }) => {
        return TodoService.delete(id)
      }
    }
  }
})

module.exports = mutationType