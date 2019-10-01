const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Video',
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
