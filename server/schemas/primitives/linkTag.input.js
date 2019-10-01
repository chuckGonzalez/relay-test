const { GraphQLInputObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'LinkTagInput',
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
