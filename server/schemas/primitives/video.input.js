const { GraphQLInputObjectType, GraphQLString, GraphQLBoolean } = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'VideoInput',
  description: 'Campo primario de video',
  fields: () => ({
    source: {
      type: GraphQLString,
    },
    alt: {
      type: GraphQLString,
    },
    autoplay: {
      type: GraphQLBoolean,
    },
  }),
});
