const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');

let database = [
  {
    id: 'a',
    name: 'task1',
  },
  {
    id: 'b',
    name: 'task2',
  },
];

const TodoType = new graphql.GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString }
  }
})

const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    findTodo: {
      type: TodoType,
      args: {
        id: { type: graphql.GraphQLString }
      },
      resolve: (_, {id}) => {
        return database.find(data=> data.id === id)
      }
    },
    listTodos: {
      type: new graphql.GraphQLList(TodoType),
      resolve: () => {
        return database
      }
    }
  }
})

const schema = new graphql.GraphQLSchema({
  query: queryType
});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
