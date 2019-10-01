const { GraphQLObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'LinkTag',
  description: 'Informacion del link para Google Tagmanager (Tracking)',
  fields: () => ({
    creative: {
      type: GraphQLString,
    },
    moduleName: {
      type: GraphQLString,
    },
  }),
});
