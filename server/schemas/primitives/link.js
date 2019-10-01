const { GraphQLObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Link',
  description: 'Campo primario de link',
  fields: () => ({
    value: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    target: {
      type: GraphQLString,
    },
    postMode: {
      type: GraphQLString,
    },
    analytics: {
      type: require('./linkTag'),
    },
  }),
});
