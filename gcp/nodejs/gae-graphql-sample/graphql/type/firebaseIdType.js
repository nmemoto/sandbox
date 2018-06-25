const graphql = require('graphql');

const firebaseIdType = new graphql.GraphQLObjectType({
  name: 'FirebaseIdType',
  fields: {
    id: { type: graphql.GraphQLString }
  }
})

module.exports = firebaseIdType