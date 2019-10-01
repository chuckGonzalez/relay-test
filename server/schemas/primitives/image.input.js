const { GraphQLInputObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'ImageInput',
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
