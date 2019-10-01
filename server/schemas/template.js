const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Template',
  description: 'Modulos de contendio de las páginas',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    uri: {
      type: GraphQLString,
    },
    requestedUri: {
      type: GraphQLString,
    },
    modules: {
      type: new GraphQLList(require('./module')),
    },
  }),
});
