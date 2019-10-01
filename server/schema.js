const { GraphQLSchema } = require('graphql');

module.exports = new GraphQLSchema({
  query: require('./schemas/query'),
  mutation: require('./schemas/mutation'),
});
