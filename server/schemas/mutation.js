const { GraphQLObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Metodos de actualizacion',
  fields: () => ({
    viewer: {
      type: require('./viewer'),
      resolve: require('../resolvers/query.viewer').bind(null, 'MUTATION'),
      args: {
        token: {
          type: GraphQLString,
        },
      },
    },
  }),
});
