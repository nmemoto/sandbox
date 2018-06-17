const graphql = require('graphql');
const todoType = require('./todoType');
const todoInputType = require('./todoInputType');
const database = require('../lib/database');

const mutationType = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: {
      type: todoType,
      args: {
        todo: { type: todoInputType }
      },
      resolve: (_, { todo }) => {
        database.push(todo)
        return todo
      }
    }
  }
})

module.exports = mutationType