const graphql = require('graphql');
const addTodoInputType = require('./addTodoInputType');
const updateTodoInputType = require('./updateTodoInputType');
const firebaseIdType = require('./firebaseIdType');
const TodoService = require('../../services/TodoService');

const mutationType = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: {
      type: firebaseIdType,
      args: {
        todo: { type: addTodoInputType }
      },
      resolve: async (_, { todo }) => {
        return await TodoService.create(todo)
          .then(result => {
            return result
          })
      }
    },
    updateTodo: {
      type: graphql.GraphQLString,
      args: {
        todo: { type: updateTodoInputType }
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