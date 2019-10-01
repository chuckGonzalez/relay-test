const { GraphQLObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Image',
  description: 'Campo primario de imagenes',
  fields: () => ({
    desktopSource: {
      type: GraphQLString,
    },
    mobileSource: {
      type: GraphQLString,
    },
    alt: {
      type: GraphQLString,
    },
  }),
});
