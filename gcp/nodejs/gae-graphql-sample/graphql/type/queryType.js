const graphql = require('graphql');
const todoType = require('./todoType');
const TodoService = require('../../services/TodoService');

const queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      findTodo: {
        type: todoType,
        args: {
          id: { type: graphql.GraphQLString }
        },
        resolve: (_, {id}) => {
          return TodoService.findById(id)
        }
      },
      listTodos: {
        type: new graphql.GraphQLList(todoType),
        resolve: async () => {
          return await TodoService.all()
            .then((result) => {
              return result
            })
        }
      }
    }
  })

  module.exports = queryType