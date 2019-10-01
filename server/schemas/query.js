const { GraphQLString, GraphQLObjectType } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Query',
  description: 'Metodos de consulta',
  fields: () => ({
    viewer: {
      type: require('./viewer'),
      resolve: require('../resolvers/query.viewer').bind(null, 'QUERY'),
      args: {
        token: {
          type: GraphQLString,
        },
      },
    },
  }),
});
