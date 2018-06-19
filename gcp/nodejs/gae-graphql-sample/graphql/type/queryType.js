const graphql = require('graphql');
const todoType = require('./todoType');
const database = require('../../lib/database');

const queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      findTodo: {
        type: todoType,
        args: {
          id: { type: graphql.GraphQLString }
        },
        resolve: (_, {id}) => {
          return database.find(data => data.id === id)
        }
      },
      listTodos: {
        type: new graphql.GraphQLList(todoType),
        resolve: () => {
          return database
        }
      }
    }
  })

  module.exports = queryType